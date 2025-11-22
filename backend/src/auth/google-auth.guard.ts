import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { randomBytes } from 'crypto';
import { Request, Response } from 'express';

const OAUTH_STATE_COOKIE = 'oauth_state';
const STATE_TTL_MS = 5 * 60 * 1000; // 5 minutes

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  getAuthenticateOptions(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest<Request>();
    const res = context.switchToHttp().getResponse<Response>();

    // Only set/generate state on the initial login endpoint, not on the callback.
    if (req.path.endsWith('/auth/google')) {
      const state = randomBytes(16).toString('hex');

      res.cookie(OAUTH_STATE_COOKIE, state, {
        httpOnly: true,
        sameSite: 'lax',
        secure: false, // set true behind HTTPS/production
        maxAge: STATE_TTL_MS,
        path: '/auth/google/redirect',
      });

      return { state };
    }

    return super.getAuthenticateOptions(context) ?? {};
  }
}
