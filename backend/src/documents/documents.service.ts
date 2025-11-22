import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  SearchDocumentsDto,
  SearchSortOption,
} from './dto/search-documents.dto';

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 50;
const CACHE_TTL_MS = 60_000;
const MAX_CACHE_ENTRIES = 200;

type DocumentResponse = {
  id: number;
  title: string;
  shortDescription: string | null;
  gradeBand: string | null;
  resourceType: string;
  resourceUrl: string;
  mimeType: string | null;
  numericScore: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  fields: Array<{ id: number; name: string }>;
  subjects: Array<{ id: number; name: string }>;
};

type SearchResponse = {
  data: DocumentResponse[];
  meta: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
  };
};

type CacheEntry = {
  expiresAt: number;
  value: SearchResponse;
};

@Injectable()
export class DocumentsService {
  private readonly logger = new Logger(DocumentsService.name);
  private readonly cache = new Map<string, CacheEntry>();

  constructor(private readonly prisma: PrismaService) {}

  async searchDocuments(dto: SearchDocumentsDto): Promise<SearchResponse> {
    const page = dto.page && dto.page > 0 ? dto.page : 1;
    const limit =
      dto.limit && dto.limit > 0
        ? Math.min(dto.limit, MAX_LIMIT)
        : DEFAULT_LIMIT;
    const skip = (page - 1) * limit;

    const cacheKey = this.getCacheKey({ ...dto, page, limit });
    const now = Date.now();
    this.cleanupExpiredEntries(now);

    const cached = this.cache.get(cacheKey);
    if (cached && cached.expiresAt > now) {
      this.logger.debug(`[cache:hit] ${cacheKey}`);
      return this.cloneResponse(cached.value);
    }

    this.logger.debug(`[cache:miss] ${cacheKey}`);

    const keywordTokens = dto.keyword ? this.tokenizeKeyword(dto.keyword) : [];
    const where = this.buildWhere(dto, keywordTokens);
    const orderBy = this.resolveOrderBy(dto.sort);

    // Fetch only one page plus one extra to infer hasMore.
    const items = await this.prisma.documents.findMany({
      where,
      skip,
      take: limit + 1,
      orderBy,
      include: {
        document_fields: { include: { fields: true } },
        document_subjects: { include: { subjects: true } },
      },
    });

    const mapped = items.map((item) => this.mapDocument(item));
    const normalizedKeyword = dto.keyword
      ? this.normalizeText(dto.keyword)
      : null;

    const filtered = normalizedKeyword
      ? this.applyFuzzyMatching(mapped, normalizedKeyword)
      : mapped;

    const total = await this.prisma.documents.count({ where });
    const data = filtered.slice(0, limit);
    const hasMore = skip + data.length < total;

    const response: SearchResponse = {
      data,
      meta: {
        page,
        limit,
        total,
        hasMore,
      },
    };

    this.cache.set(cacheKey, {
      expiresAt: now + CACHE_TTL_MS,
      value: this.cloneResponse(response),
    });
    this.evictOverflow();

    this.logger.debug(
      `[cache:set] ${cacheKey} ttl=${CACHE_TTL_MS}ms total=${total}`,
    );

    return response;
  }

  private buildWhere(
    dto: SearchDocumentsDto,
    keywordTokens: string[],
  ): Prisma.documentsWhereInput | undefined {
    const filters: Prisma.documentsWhereInput[] = [];

    if (dto.fieldId) {
      filters.push({
        document_fields: {
          some: {
            field_id: dto.fieldId,
          },
        },
      });
    }

    if (dto.subjectId) {
      filters.push({
        document_subjects: {
          some: {
            subject_id: dto.subjectId,
          },
        },
      });
    }

    if (dto.keyword) {
      const insensitive = Prisma.QueryMode.insensitive;
      const tokenFilters: Prisma.documentsWhereInput[] =
        keywordTokens.length > 0
          ? [
              ...keywordTokens.flatMap((token) => [
                {
                  title: { contains: token, mode: insensitive },
                },
                {
                  short_description: {
                    contains: token,
                    mode: insensitive,
                  },
                },
              ]),
              {
                title: { contains: dto.keyword, mode: insensitive },
              },
              {
                short_description: {
                  contains: dto.keyword,
                  mode: insensitive,
                },
              },
            ]
          : [
              { title: { contains: dto.keyword, mode: insensitive } },
              {
                short_description: {
                  contains: dto.keyword,
                  mode: insensitive,
                },
              },
            ];

      filters.push({
        OR: tokenFilters,
      });
    }

    return filters.length > 0 ? { AND: filters } : undefined;
  }

  private resolveOrderBy(sort?: SearchSortOption) {
    switch (sort) {
      case 'oldest':
        return { created_at: 'asc' } as const;
      case 'az':
        return { title: 'asc' } as const;
      case 'za':
        return { title: 'desc' } as const;
      case 'newest':
      default:
        return { created_at: 'desc' } as const;
    }
  }

  private applySorting(
    items: DocumentResponse[],
    sort: SearchSortOption | undefined,
  ): DocumentResponse[] {
    const clone = [...items];
    const compareDates = (a: DocumentResponse, b: DocumentResponse) => {
      const aTime = a.createdAt ? a.createdAt.getTime() : 0;
      const bTime = b.createdAt ? b.createdAt.getTime() : 0;
      return aTime - bTime;
    };

    switch (sort) {
      case 'oldest':
        return clone.sort((a, b) => compareDates(a, b));
      case 'az':
        return clone.sort((a, b) => a.title.localeCompare(b.title));
      case 'za':
        return clone.sort((a, b) => b.title.localeCompare(a.title));
      case 'newest':
      default:
        return clone.sort((a, b) => compareDates(b, a));
    }
  }

  private mapDocument(item: Prisma.documentsGetPayload<{
    include: {
      document_fields: {
        include: { fields: true };
      };
      document_subjects: {
        include: { subjects: true };
      };
    };
  }>): DocumentResponse {
    return {
      id: item.id,
      title: item.title,
      shortDescription: item.short_description,
      gradeBand: item.grade_band,
      resourceType: item.resource_type,
      resourceUrl: item.resource_url,
      mimeType: item.mime_type,
      numericScore: item.numeric_score
        ? Number(item.numeric_score.toString())
        : null,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      fields: item.document_fields
        .map((df) =>
          df.fields ? { id: df.fields.id, name: df.fields.name } : null,
        )
        .filter((field): field is { id: number; name: string } => field !== null),
      subjects: item.document_subjects
        .map((ds) =>
          ds.subjects ? { id: ds.subjects.id, name: ds.subjects.name } : null,
        )
        .filter(
          (subject): subject is { id: number; name: string } =>
            subject !== null,
        ),
    };
  }

  private applyFuzzyMatching(
    items: DocumentResponse[],
    normalizedKeyword: string,
  ): DocumentResponse[] {
    const tokens = normalizedKeyword
      .split(/\s+/)
      .map((token) => token.trim())
      .filter(Boolean);

    if (tokens.length === 0) {
      return items;
    }

    return items.filter((item) => {
      const haystack = `${this.normalizeText(item.title)} ${this.normalizeText(
        item.shortDescription ?? '',
      )}`;
      const haystackWords = haystack
        .split(/\s+/)
        .map((word) => word.trim())
        .filter(Boolean);

      return tokens.every((token) =>
        this.matchesToken(token, haystackWords),
      );
    });
  }

  private matchesToken(token: string, words: string[]): boolean {
    return words.some((word) => {
      if (word.includes(token) || token.includes(word)) {
        return true;
      }

      return this.levenshteinDistance(token, word) <= 1;
    });
  }

  private tokenizeKeyword(keyword: string): string[] {
    return this.normalizeText(keyword)
      .split(/\s+/)
      .map((token) => token.trim())
      .filter(Boolean);
  }

  private normalizeText(value: string): string {
    return value
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase();
  }

  private levenshteinDistance(a: string, b: string): number {
    const matrix: number[][] = Array.from({ length: a.length + 1 }, () =>
      Array(b.length + 1).fill(0),
    );

    for (let i = 0; i <= a.length; i++) {
      matrix[i][0] = i;
    }
    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost,
        );
      }
    }

    return matrix[a.length][b.length];
  }

  private getCacheKey(dto: Omit<SearchDocumentsDto, 'page' | 'limit'> & {
    page: number;
    limit: number;
  }): string {
    const keyObject = {
      keyword: dto.keyword ? this.normalizeText(dto.keyword) : undefined,
      fieldId: dto.fieldId ?? null,
      subjectId: dto.subjectId ?? null,
      page: dto.page,
      limit: dto.limit,
      sort: dto.sort ?? 'newest',
    };

    return JSON.stringify(keyObject);
  }

  private cleanupExpiredEntries(now: number) {
    for (const [key, entry] of this.cache.entries()) {
      if (entry.expiresAt <= now) {
        this.cache.delete(key);
      }
    }
  }

  private evictOverflow() {
    if (this.cache.size <= MAX_CACHE_ENTRIES) {
      return;
    }

    // Simple eviction: delete oldest entries by expiration time.
    const entries = Array.from(this.cache.entries()).sort(
      (a, b) => a[1].expiresAt - b[1].expiresAt,
    );

    const removeCount = this.cache.size - MAX_CACHE_ENTRIES;
    for (let i = 0; i < removeCount; i++) {
      this.cache.delete(entries[i][0]);
    }
  }

  private cloneResponse(response: SearchResponse): SearchResponse {
    return {
      data: response.data.map((doc) => ({
        ...doc,
        fields: doc.fields.map((field) => ({ ...field })),
        subjects: doc.subjects.map((subject) => ({ ...subject })),
      })),
      meta: { ...response.meta },
    };
  }
}
