import { DataSource } from 'typeorm';
import { Apartment } from './apartments/entities/apartment.entity';
import { ApartmentPhoto } from './apartments/entities/apartment-photo.entity';

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Apartment, ApartmentPhoto],
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: true,
  // synchronize: process.env.NODE_ENV === "development", // В продакшене FALSE
  logging: process.env.NODE_ENV === "development",
});
