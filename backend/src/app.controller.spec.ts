import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';

describe('AppController', () => {
  let appController: AppController;

  const prismaMock = {
    users: {
      count: jest.fn(),
    },
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    prismaMock.users.count.mockReset();
  });

  it('returns healthy status when database is reachable', async () => {
    prismaMock.users.count.mockResolvedValue(7);

    await expect(appController.healthCheck()).resolves.toEqual({
      ok: true,
      db: 'connected',
      usersCount: 7,
    });
  });

  it('returns error status when database query fails', async () => {
    prismaMock.users.count.mockRejectedValue(new Error('connection failed'));

    const response = await appController.healthCheck();

    expect(response.ok).toBe(false);
    expect(response.db).toBe('error');
    expect(response.message).toBe('connection failed');
  });
});
