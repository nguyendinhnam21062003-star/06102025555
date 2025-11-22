import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { DocumentsService } from '../src/documents/documents.service';
import { JwtAuthGuard } from '../src/auth/jwt-auth.guard';

describe('DocumentsController (e2e)', () => {
  let app: INestApplication;

  const mockDocumentsService = {
    searchDocuments: jest.fn(),
  };

  beforeAll(() => {
    process.env.JWT_SECRET = process.env.JWT_SECRET ?? 'test-secret';
    process.env.GOOGLE_CLIENT_ID =
      process.env.GOOGLE_CLIENT_ID ?? 'test-client-id';
    process.env.GOOGLE_CLIENT_SECRET =
      process.env.GOOGLE_CLIENT_SECRET ?? 'test-client-secret';
  });

  beforeEach(async () => {
    mockDocumentsService.searchDocuments.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Algebra Lecture Pack',
          shortDescription: 'Comprehensive algebra notes for grade 10 learners',
          gradeBand: 'Grade 10',
          resourceType: 'lesson-plan',
          resourceUrl: 'https://example.com/algebra',
          mimeType: 'application/pdf',
          numericScore: 4.5,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          fields: [{ id: 1, name: 'Mathematics' }],
          subjects: [{ id: 1, name: 'Algebra' }],
        },
      ],
      meta: {
        page: 1,
        limit: 10,
        total: 1,
        hasMore: false,
      },
    });

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(DocumentsService)
      .useValue(mockDocumentsService)
      .overrideGuard(JwtAuthGuard)
      .useValue({
        canActivate: (context: any) => {
          const req = context.switchToHttp().getRequest();
          req.user = { id: 99 };
          return true;
        },
      })
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    await app.init();
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await app.close();
  });

  it('/documents/search (GET) returns results', async () => {
    const response = await request(app.getHttpServer())
      .get('/documents/search?keyword=bai+giang&page=1&limit=5&sort=az')
      .expect(200);

    expect(mockDocumentsService.searchDocuments).toHaveBeenCalledWith({
      keyword: 'bai giang',
      page: 1,
      limit: 5,
      sort: 'az',
    });

    expect(response.body).toEqual({
      data: [
        {
          id: 1,
          title: 'Algebra Lecture Pack',
          shortDescription: 'Comprehensive algebra notes for grade 10 learners',
          gradeBand: 'Grade 10',
          resourceType: 'lesson-plan',
          resourceUrl: 'https://example.com/algebra',
          mimeType: 'application/pdf',
          numericScore: 4.5,
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z',
          fields: [{ id: 1, name: 'Mathematics' }],
          subjects: [{ id: 1, name: 'Algebra' }],
        },
      ],
      meta: {
        page: 1,
        limit: 10,
        total: 1,
        hasMore: false,
      },
    });
  });
});
