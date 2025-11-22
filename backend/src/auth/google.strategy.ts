import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService) {
    const clientID = configService.get<string>('GOOGLE_CLIENT_ID');
    const clientSecret = configService.get<string>('GOOGLE_CLIENT_SECRET');
    const callbackURL =
      configService.get<string>('GOOGLE_CALLBACK_URL') ??
      'http://localhost:3000/auth/google/redirect';

    if (!clientID || !clientSecret) {
      throw new Error(
        'GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be provided.',
      );
    }

    super({
      clientID,
      clientSecret,
      callbackURL,
      scope: ['email', 'profile'],
      passReqToCallback: true,
      // We manage state ourselves via cookie; do not use the built-in session-based state store.
      state: false,
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<void> {
    const stateFromQuery = request?.query?.state;
    const stateFromCookie = this.extractCookie(request?.headers?.cookie);

    if (!stateFromQuery || !stateFromCookie || stateFromQuery !== stateFromCookie) {
      return done(
        new UnauthorizedException('Invalid OAuth state.'),
        undefined,
      );
    }

    if (!profile?.id) {
      return done(
        new UnauthorizedException('Google profile payload is missing.'),
        undefined,
      );
    }

    const primaryEmail = profile.emails?.[0];
    if (!primaryEmail?.value) {
      return done(
        new UnauthorizedException('Google account does not expose email.'),
        undefined,
      );
    }

    // If Google marks the email as unverified, reject the login.
    if (primaryEmail.verified === false) {
      return done(
        new UnauthorizedException('Google email is not verified.'),
        undefined,
      );
    }

    done(null, profile);
  }

  private extractCookie(cookieHeader?: string, key = 'oauth_state'): string | undefined {
    if (!cookieHeader) return undefined;

    const pairs = cookieHeader.split(';').map((item) => item.trim());
    for (const pair of pairs) {
      const [k, ...rest] = pair.split('=');
      if (k === key) {
        return decodeURIComponent(rest.join('='));
      }
    }

    return undefined;
  }
}
