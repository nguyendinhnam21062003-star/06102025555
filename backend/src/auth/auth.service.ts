import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateGoogleUser(profile: any) {
    const { id, displayName, emails, photos } = profile;
    const primaryEmail = emails?.[0];
    const email = primaryEmail?.value;

    if (!email) {
      throw new UnauthorizedException('Google account does not expose email.');
    }

    if (primaryEmail?.verified === false) {
      throw new UnauthorizedException('Google email is not verified.');
    }

    let user = await this.prisma.users.findUnique({ where: { email } });
    if (!user) {
      user = await this.prisma.users.create({
        data: {
          full_name: displayName,
          email,
          google_id: id,
          avatar_url: photos?.[0]?.value || null,
        },
      });
    }

    return user;
  }

  async generateJwt(user: any) {
    const payload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload);
    const refreshSecret =
      this.configService.get<string>('JWT_REFRESH_SECRET') ??
      this.configService.get<string>('JWT_SECRET');
    const refreshExpiresIn =
      this.configService.get<string>('REFRESH_TOKEN_TTL') ?? '7d';

    if (!refreshSecret) {
      throw new Error('JWT_REFRESH_SECRET must be configured.');
    }

    const refresh_token = this.jwtService.sign(payload, {
      secret: refreshSecret,
      expiresIn: refreshExpiresIn as any,
    });

    return {
      access_token,
      refresh_token,
    };
  }

  async refreshTokens(refreshToken: string) {
    const refreshSecret =
      this.configService.get<string>('JWT_REFRESH_SECRET') ??
      this.configService.get<string>('JWT_SECRET');

    if (!refreshSecret) {
      throw new UnauthorizedException('Refresh secret is not configured.');
    }

    let payload: { sub: number; email: string };
    try {
      payload = this.jwtService.verify(refreshToken, {
        secret: refreshSecret,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired refresh token.');
    }

    const user = await this.prisma.users.findUnique({
      where: { id: payload.sub },
    });

    if (!user) {
      throw new UnauthorizedException('User not found for refresh token.');
    }

    const tokens = await this.generateJwt(user);
    return { user, ...tokens };
  }
}
