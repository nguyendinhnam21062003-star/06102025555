# Backend Service

## Requirements

- Node.js 18+
- PostgreSQL instance (local or remote)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and fill in the values supplied by the ops team:

   ```bash
   cp .env.example .env
   ```

   | Variable               | Description                                                                                                             |
   | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
   | `DATABASE_URL`         | Prisma connection string to PostgreSQL (`postgresql://user:pass@host:port/database?schema=public`).                     |
   | `JWT_SECRET`           | Secret key used to sign JWT access tokens.                                                                              |
   | `GOOGLE_CLIENT_ID`     | OAuth client ID from Google Cloud Console.                                                                              |
   | `GOOGLE_CLIENT_SECRET` | OAuth client secret from Google Cloud Console.                                                                          |
   | `GOOGLE_CALLBACK_URL`  | OAuth redirect URL that matches the Google client configuration (default `http://localhost:3000/auth/google/redirect`). |

3. Run Prisma migrations (if available) and start the server:

   ```bash
   npx prisma migrate deploy
   npm run start:dev
   ```

Latest backend status reports are stored under `reports/`.
