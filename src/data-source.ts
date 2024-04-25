import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Conference } from './models/Conference';
import { Author } from './models/Author';
import { Topic } from './models/Topic';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'weather_conference_app',
  entities: [Conference, Author, Topic],
  synchronize: true,
  logging: false,
});