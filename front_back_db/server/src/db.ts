import { DataSource } from 'typeorm';
import { join } from 'path';

import * as dotenv from 'dotenv';
import { Project } from './Models/project';
dotenv.config({ path: '../.env' });

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Project],
  migrations: [join(__dirname, '/migrations/*.{ts,js}')],
  synchronize: false,
});

AppDataSource.initialize()
  .then(() => console.log('DB successfully initialized'))
  .catch((error: Error) => console.log('Could not connect', error));

export default AppDataSource;
