# Phase 1 - Backend Stabilisation & Security

## Implemented Changes

- Introduced global `ConfigModule` and refactored authentication module to load all secrets from environment variables (`JWT_SECRET`, Google OAuth keys, callback URL).
- Added JWT strategy and guard scaffolding, enforcing validated tokens and future route protection.
- Hardened Google OAuth integration with configurable callback URL and explicit error handling when Google does not return a valid profile.
- Enabled CORS for `http://localhost:5173`, added request logging middleware, and applied rate limiting (`express-rate-limit`) to mitigate abuse.
- Sanitised committed `.env`, created `.env.example`, and expanded `README.md` with setup instructions.
- Generated documentation folders (`docs/`, `reports/`) with baseline testing notes (`docs/backend-test-report.md`).

## Endpoint Verification

| Endpoint | Method | Status | Notes |
| --- | --- | --- | --- |
| `/health` | GET | Not executed | Requires live PostgreSQL (`DATABASE_URL`). |
| `/auth/google` | GET | Not executed | Browser-based OAuth flow; needs valid Google credentials. |
| `/auth/google/redirect` | GET | Not executed | Depends on successful Google login and callback configuration. |

Additional check: `npm run build` passes without errors after the refactor.

## Known Issues / Risks

- Service startup now requires valid values for `JWT_SECRET`, `GOOGLE_CLIENT_ID`, and `GOOGLE_CLIENT_SECRET`; missing secrets will prevent boot (by design).
- No automated tests cover the OAuth flow or rate limiting; recommend adding integration specs once infrastructure is available.
- Health check still queries `users` table; will fail if Prisma migrations or database are not provisioned.

## Recommendations for Phase 2

1. Provision shared development secrets (Google OAuth + PostgreSQL) and automate environment bootstrap.
2. Add integration tests covering Google login callback and JWT guard behaviour.
3. Extend health monitoring to include lightweight DB ping and application readiness metrics.
4. Start implementing document search APIs leveraging existing Prisma models, with corresponding unit/e2e coverage.
