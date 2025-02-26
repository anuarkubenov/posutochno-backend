import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentsController } from './apartments.controller';
import { ApartmentsService } from './apartments.service';
import { Apartment } from './entities/apartment.entity';
import { ApartmentPhoto } from './entities/apartment-photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment, ApartmentPhoto])],
  controllers: [ApartmentsController],
  providers: [ApartmentsService],
})
export class ApartmentsModule {}
