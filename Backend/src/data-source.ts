import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'node:path';
import 'reflect-metadata';
import 'dotenv/config';

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, './entities/**.{js,ts}');
  const migrationsPath = path.join(__dirname, './migrations/**.{js,ts}');

  if (!process.env.DATABASE_URL) {
    throw new Error('Env var DABATASE_URL does not exists');
  }

  return {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
