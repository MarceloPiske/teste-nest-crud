import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { PersonModel } from './tasks/models/person.model';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '2211',
  database: 'nest_teste_api',
  synchronize: true,
  logging: false,
  entities: [PersonModel],
  migrations: [],
  subscribers: [],
});
