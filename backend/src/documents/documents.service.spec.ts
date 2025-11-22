import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsService } from './documents.service';
import { PrismaService } from '../prisma/prisma.service';
import { SearchSortOption } from './dto/search-documents.dto';

describe('DocumentsService', () => {
  let service: DocumentsService;
  const prismaMock = {
    documents: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DocumentsService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<DocumentsService>(DocumentsService);

    prismaMock.documents.findMany.mockReset();
  });

  it('caches identical search queries within TTL', async () => {
    const now = new Date();
    prismaMock.documents.findMany.mockResolvedValue([
      {
        id: 1,
        title: 'Algebra 101',
        short_description: 'Foundational algebra concepts',
        grade_band: 'High School',
        resource_type: 'lesson-plan',
        resource_url: 'https://example.com/algebra',
        mime_type: 'application/pdf',
        numeric_score: { toString: () => '4.50' },
        created_at: now,
        updated_at: now,
        document_fields: [{ fields: { id: 10, name: 'Mathematics' } }],
        document_subjects: [{ subjects: { id: 20, name: 'Algebra' } }],
      },
    ]);

    const first = await service.searchDocuments({
      keyword: 'algebra',
      page: 1,
      limit: 10,
    });

    const second = await service.searchDocuments({
      keyword: 'algebra',
      page: 1,
      limit: 10,
    });

    expect(prismaMock.documents.findMany).toHaveBeenCalledTimes(1);
    expect(second).toEqual(first);
  });

  it('applies alphabetical sorting when requested', async () => {
    const now = new Date();
    prismaMock.documents.findMany.mockResolvedValue([
      {
        id: 2,
        title: 'Biology Basics',
        short_description: null,
        grade_band: null,
        resource_type: 'lesson-plan',
        resource_url: '#',
        mime_type: null,
        numeric_score: null,
        created_at: now,
        updated_at: now,
        document_fields: [],
        document_subjects: [],
      },
      {
        id: 1,
        title: 'Algebra 101',
        short_description: null,
        grade_band: null,
        resource_type: 'lesson-plan',
        resource_url: '#',
        mime_type: null,
        numeric_score: null,
        created_at: now,
        updated_at: now,
        document_fields: [],
        document_subjects: [],
      },
    ]);

    const result = await service.searchDocuments({
      sort: SearchSortOption.AZ,
    });

    expect(result.data.map((item) => item.title)).toEqual([
      'Algebra 101',
      'Biology Basics',
    ]);
  });

  it('falls back to fuzzy search when initial query returns empty set', async () => {
    const now = new Date();
    prismaMock.documents.findMany
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([
        {
          id: 3,
          title: 'Kinh tế vĩ mô',
          short_description: 'Bài giảng kinh tế cho sinh viên',
          grade_band: 'University',
          resource_type: 'lesson-plan',
          resource_url: '#',
          mime_type: null,
          numeric_score: null,
          created_at: now,
          updated_at: now,
          document_fields: [],
          document_subjects: [],
        },
      ]);

    const result = await service.searchDocuments({
      keyword: 'kinh te',
      page: 1,
      limit: 10,
    });

    expect(prismaMock.documents.findMany).toHaveBeenCalledTimes(2);
    expect(result.data).toHaveLength(1);
    expect(result.data[0].title).toBe('Kinh tế vĩ mô');
  });
});
