import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApartmentPhoto } from '../entities/apartment-photo.entity';

export class CreateApartmentDto {
  @IsString()
  @IsNotEmpty()
  title: string; // Название квартиры

  @IsString()
  @IsOptional()
  description?: string; // Описание квартиры (опционально)

  @IsNumber()
  @IsNotEmpty()
  price: number; // Цена

  @IsNumber()
  @IsOptional()
  rooms?: number; // Количество комнат (опционально)

  @IsString()
  @IsOptional()
  floor?: string; // Этаж (опционально)

  @IsNumber()
  @IsOptional()
  area?: number; // Площадь, м² (опционально)

  @IsString()
  @IsOptional()
  condition?: string; // Состояние квартиры (опционально)

  @IsBoolean()
  @IsOptional()
  studio_kitchen?: boolean; // Кухня-студия (да/нет)

  @IsString()
  @IsNotEmpty()
  city: string; // Город

  @IsString()
  @IsOptional()
  complex?: string; // Жилой комплекс (опционально)

  @IsString()
  @IsNotEmpty()
  street: string; // Улица

  @IsString()
  @IsNotEmpty()
  house_number: string; // Номер дома

  @IsNumber({ maxDecimalPlaces: 6 })
  @IsOptional()
  latitude?: number; // Широта

  @IsNumber({ maxDecimalPlaces: 6 })
  @IsOptional()
  longitude?: number; // Долгота

  @IsString()
  @IsOptional()
  check_in_time?: string; // Время заезда

  @IsString()
  @IsOptional()
  check_out_time?: string; // Время выезда

  @IsArray()
  @IsString({ each: true }) // Каждый элемент массива должен быть строкой
  @IsOptional()
  photos?: ApartmentPhoto[]; // Список путей к фотографиям

  // Поля безопасности
  @IsBoolean()
  @IsOptional()
  intercom?: boolean;

  @IsBoolean()
  @IsOptional()
  videoIntercom?: boolean;

  @IsBoolean()
  @IsOptional()
  electronicLocks?: boolean;

  @IsBoolean()
  @IsOptional()
  parking?: boolean;

  @IsBoolean()
  @IsOptional()
  nearbyParking?: boolean;

  // Удобства
  @IsBoolean()
  @IsOptional()
  internet?: boolean;

  @IsBoolean()
  @IsOptional()
  tv?: boolean;

  @IsBoolean()
  @IsOptional()
  washing_machine?: boolean;

  @IsBoolean()
  @IsOptional()
  microwave?: boolean;

  @IsBoolean()
  @IsOptional()
  iron?: boolean;

  @IsBoolean()
  @IsOptional()
  dishes?: boolean;

  @IsBoolean()
  @IsOptional()
  air_conditioner?: boolean;

  @IsBoolean()
  @IsOptional()
  dishwasher?: boolean;

  @IsBoolean()
  @IsOptional()
  elevator?: boolean;

  @IsBoolean()
  @IsOptional()
  coffee_machine?: boolean;

  // Ванная комната
  @IsBoolean()
  @IsOptional()
  shower?: boolean;

  @IsBoolean()
  @IsOptional()
  bathtub?: boolean;

  @IsBoolean()
  @IsOptional()
  jacuzzi?: boolean;

  @IsBoolean()
  @IsOptional()
  towels?: boolean;

  @IsBoolean()
  @IsOptional()
  bathrobe?: boolean;

  @IsBoolean()
  @IsOptional()
  slippers?: boolean;

  @IsBoolean()
  @IsOptional()
  hairdryer?: boolean;

  @IsBoolean()
  @IsOptional()
  shampoo?: boolean;

  @IsBoolean()
  @IsOptional()
  shower_gel?: boolean;

  // Подходит для
  @IsBoolean()
  @IsOptional()
  non_smokers?: boolean;

  @IsBoolean()
  @IsOptional()
  parties?: boolean;

  @IsBoolean()
  @IsOptional()
  business_trip_documents?: boolean;

  @IsBoolean()
  @IsOptional()
  overnight_stay?: boolean;

  @IsBoolean()
  @IsOptional()
  with_kids?: boolean;

  @IsBoolean()
  @IsOptional()
  with_pets?: boolean;

  @IsString()
  @IsOptional()
  main_photo?: string; // Путь к главному фото (опционально)

  @IsString()
  @IsOptional()
  video?: string; // Путь к видео (опционально)
}
