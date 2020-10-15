export const TYPEORM_TYPE = process.env.TYPEORM_TYPE;
export const TYPEORM_HOST = process.env.TYPEORM_HOST;
export const TYPEORM_PORT = parseInt(process.env.TYPEORM_PORT, 10);
export const TYPEORM_USERNAME = process.env.TYPEORM_USERNAME;
export const TYPEORM_PASSWORD = process.env.TYPEORM_PASSWORD;
export const TYPEORM_DATABASE = process.env.TYPEORM_DATABASE;
export const TYPEORM_SYNCHRONIZE = process.env.TYPEORM_SYNCHRONIZE === 'true';
export const TYPEORM_LOGGING = process.env.TYPEORM_LOGGING === 'true';
export const TYPEORM_DROPSCHEMA = process.env.TYPEORM_DROPSCHEMA === 'true';
export const TYPEORM_ENTITIES = process.env.TYPEORM_ENTITIES;
export const TYPEORM_MIGRATIONS = process.env.TYPEORM_MIGRATIONS;
export const TYPEORM_SUBSCRIBERS = process.env.TYPEORM_SUBSCRIBERS;