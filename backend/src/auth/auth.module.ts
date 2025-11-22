import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { GoogleAuthGuard } from './google-auth.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        const accessTokenTtl =
          configService.get<string>('ACCESS_TOKEN_TTL') ?? '15m';

        if (!secret) {
          throw new Error(
            'JWT_SECRET is not defined. Please configure it in the environment.',
          );
        }

        return {
          secret,
          signOptions: { expiresIn: accessTokenTtl as any },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    GoogleStrategy,
    JwtStrategy,
    JwtAuthGuard,
    GoogleAuthGuard,
  ],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
