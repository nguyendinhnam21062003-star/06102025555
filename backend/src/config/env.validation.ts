type CleanEnv = {
  NODE_ENV: 'development' | 'production' | 'test';
  DATABASE_URL: string;
  JWT_SECRET: string;
  JWT_REFRESH_SECRET?: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_CALLBACK_URL: string;
  BACKEND_PORT?: number;
  PORT?: number;
  ACCESS_TOKEN_TTL?: string;
  REFRESH_TOKEN_TTL?: string;
};

export function validateEnv(config: Record<string, unknown>): CleanEnv {
  const errors: string[] = [];

  const pickString = (key: string, required = true): string | undefined => {
    const value = config[key];
    if (typeof value === 'string' && value.trim() !== '') {
      return value.trim();
    }

    if (required) {
      errors.push(`${key} is required`);
    }

    return undefined;
  };

  const asPort = (key: string): number | undefined => {
    const value = pickString(key, false);
    if (!value) return undefined;

    const parsed = Number(value);
    if (!Number.isInteger(parsed) || parsed <= 0 || parsed > 65535) {
      errors.push(`${key} must be a valid port number`);
      return undefined;
    }

    return parsed;
  };

  const nodeEnv =
    (pickString('NODE_ENV', false) as CleanEnv['NODE_ENV']) ?? 'development';

  if (!['development', 'production', 'test'].includes(nodeEnv)) {
    errors.push('NODE_ENV must be one of development | production | test');
  }

  const databaseUrl = pickString('DATABASE_URL');
  const jwtSecret = pickString('JWT_SECRET');
  const googleClientId = pickString('GOOGLE_CLIENT_ID');
  const googleClientSecret = pickString('GOOGLE_CLIENT_SECRET');
  const googleCallbackUrl =
    pickString('GOOGLE_CALLBACK_URL', false) ??
    'http://localhost:3000/auth/google/redirect';
  const jwtRefreshSecret = pickString('JWT_REFRESH_SECRET', false);
  const accessTokenTtl = pickString('ACCESS_TOKEN_TTL', false);
  const refreshTokenTtl = pickString('REFRESH_TOKEN_TTL', false);

  if (jwtSecret && jwtSecret.length < 16) {
    errors.push('JWT_SECRET should be at least 16 characters for security');
  }

  if (jwtSecret && jwtSecret.toLowerCase() === 'supersecret') {
    errors.push('JWT_SECRET must not use the default insecure value');
  }

  if (jwtRefreshSecret && jwtRefreshSecret.length < 16) {
    errors.push('JWT_REFRESH_SECRET should be at least 16 characters');
  }

  const backendPort = asPort('BACKEND_PORT');
  const port = asPort('PORT');

  if (errors.length > 0) {
    throw new Error(
      `Invalid environment configuration:\n- ${errors.join('\n- ')}`,
    );
  }

  return {
    NODE_ENV: nodeEnv,
    DATABASE_URL: databaseUrl!,
    JWT_SECRET: jwtSecret!,
    JWT_REFRESH_SECRET: jwtRefreshSecret,
    GOOGLE_CLIENT_ID: googleClientId!,
    GOOGLE_CLIENT_SECRET: googleClientSecret!,
    GOOGLE_CALLBACK_URL: googleCallbackUrl,
    BACKEND_PORT: backendPort,
    PORT: port,
    ACCESS_TOKEN_TTL: accessTokenTtl,
    REFRESH_TOKEN_TTL: refreshTokenTtl,
  };
}
