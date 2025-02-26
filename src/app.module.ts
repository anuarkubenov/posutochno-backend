import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ApartmentsModule } from './apartments/apartments.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Подключение dotenv
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'BArcelona11229!',
      database: process.env.DB_NAME || 'apartments',
      autoLoadEntities: true, // Автоматическое подключение сущностей
      synchronize: false, // Только для разработки!
      cache: false,
    }),
    ApartmentsModule,
  ],
})
export class AppModule {}
