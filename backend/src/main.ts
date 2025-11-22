import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import rateLimit from 'express-rate-limit';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use(
    rateLimit({
      windowMs: 60_000,
      max: 100,
      standardHeaders: true,
      legacyHeaders: false,
    }),
  );

  app.enableCors({
    origin: ['http://localhost:5173'],
    credentials: true,
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    const startedAt = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - startedAt;
      logger.log(
        `${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`,
        'HTTP',
      );
    });

    next();
  });

  // Prefer BACKEND_PORT to avoid clashing with system-level PORT (e.g., set to 5000)
  const port = Number(process.env.BACKEND_PORT ?? process.env.PORT ?? 3000);
  await app.listen(port);
  logger.log(`Backend listening on port ${port}`, 'Bootstrap');
}
bootstrap();
