import { Controller, Get, Logger, Query, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DocumentsService } from './documents.service';
import { SearchDocumentsDto } from './dto/search-documents.dto';

@Controller('documents')
@UseGuards(JwtAuthGuard)
export class DocumentsController {
  private readonly logger = new Logger(DocumentsController.name);

  constructor(private readonly documentsService: DocumentsService) {}

  @Get('search')
  async search(
    @Query() query: SearchDocumentsDto,
    @Req() req: Request & { user?: { id?: number } },
  ) {
    const startedAt = Date.now();
    const response = await this.documentsService.searchDocuments(query);
    const userId = req.user?.id ?? 'unknown';

    this.logger.log(
      `user=${userId} keyword="${query.keyword ?? ''}" fieldId=${
        query.fieldId ?? 'any'
      } subjectId=${query.subjectId ?? 'any'} sort=${query.sort ?? 'newest'} duration=${
        Date.now() - startedAt
      }ms`,
    );

    return response;
  }
}
