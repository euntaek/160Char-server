declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;

    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
    REFRESH_TOKEN_EXPIRES_IN: string;

    TYPEORM_TYPE: string;
    TYPEORM_HOST: string;
    TYPEORM_PORT: string;
    TYPEORM_USERNAME: string;
    TYPEORM_PASSWORD: string;
    TYPEORM_DATABASE: string;
    TYPEORM_SYNCHRONIZE: string;
    TYPEORM_LOGGING: string;
    TYPEORM_DROPSCHEMA: string;
    TYPEORM_ENTITIES: string;
    TYPEORM_MIGRATIONS: string;
    TYPEORM_SUBSCRIBERS: string;

    REDIS_HOST: string;
    REDIS_PORT: string;
    REDIS_DB: string;
    REDIS_PASSWORD: string;

    SMTPT_SERVICE: string;
    SMTPT_HOST: string;
    SMTPT_PORT: string;
    SMTPT_SECURE: string;
    SMTPT_USER: string;
    SMTPT_PASSWORD: string;
  }
}
