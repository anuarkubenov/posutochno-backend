import { DataSource } from 'typeorm';
import { Apartment } from './apartments/entities/apartment.entity';
import { ApartmentPhoto } from './apartments/entities/apartment-photo.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'BArcelona11229!',
  database: 'apartments',
  entities: [Apartment, ApartmentPhoto],
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false,
  logging: true,
});
