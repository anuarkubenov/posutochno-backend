import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ApartmentPhoto } from './apartment-photo.entity';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number; // Уникальный идентификатор

  @Column({ type: 'varchar', length: 255 })
  title: string; // Название квартиры

  @Column({ type: 'text', nullable: true })
  description: string; // Описание

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number; // Цена

  @Column({ type: 'text', nullable: true })
  media: string; // Фотографии (JSON-строка с массивом ссылок)

  @Column({ type: 'int' })
  rooms: number; // Количество комнат

  @Column({ type: 'varchar', length: 255, nullable: true })
  floor: string; // Этаж

  @Column({ type: 'int' })
  area: number; // Площадь, м²

  @Column({ type: 'varchar', length: 255 })
  condition: string; // Состояние квартиры

  @Column({ type: 'boolean', default: false })
  studio_kitchen: boolean; // Кухня-студия

  @Column({ type: 'varchar', length: 255 })
  city: string; // Город

  @Column({ type: 'varchar', length: 255, nullable: true })
  complex: string; // Жилой комплекс

  @Column({ type: 'varchar', length: 255 })
  street: string; // Улица

  @Column({ type: 'varchar', length: 255 })
  house_number: string; // Номер дома

  @Column({ type: 'decimal', precision: 9, scale: 6 })
  latitude: number; // Широта

  @Column({ type: 'decimal', precision: 9, scale: 6 })
  longitude: number; // Долгота

  @Column({ type: 'varchar', length: 255 })
  check_in_time: string; // Время заезда

  @Column({ type: 'varchar', length: 255 })
  check_out_time: string; // Время выезда

  @CreateDateColumn()
  created_at: Date; // Дата создания

  @UpdateDateColumn()
  updated_at: Date; // Дата обновления

  @OneToMany(() => ApartmentPhoto, (photo) => photo.apartment, {
    cascade: true,
  })
  photos: ApartmentPhoto[];

  @Column({ type: 'varchar', length: 255, nullable: true })
  main_photo: string; // Путь или URL к главному фото

  @Column({ type: 'varchar', length: 255, nullable: true })
  video?: string; // Путь к видео

  // Удобства
  @Column({ type: 'boolean', default: false })
  internet: boolean;

  @Column({ type: 'boolean', default: false })
  tv: boolean;

  @Column({ type: 'boolean', default: false })
  washing_machine: boolean;

  @Column({ type: 'boolean', default: false })
  microwave: boolean;

  @Column({ type: 'boolean', default: false })
  iron: boolean;

  @Column({ type: 'boolean', default: false })
  dishes: boolean;

  @Column({ type: 'boolean', default: false })
  air_conditioner: boolean;

  @Column({ type: 'boolean', default: false })
  dishwasher: boolean;

  @Column({ type: 'boolean', default: false })
  elevator: boolean;

  @Column({ type: 'boolean', default: false })
  coffee_machine: boolean;

  // Поля безопасности
  @Column({ type: 'boolean', default: false })
  intercom: boolean;

  @Column({ type: 'boolean', default: false })
  videoIntercom: boolean;

  @Column({ type: 'boolean', default: false })
  electronicLocks: boolean;

  @Column({ type: 'boolean', default: false })
  parking: boolean;

  @Column({ type: 'boolean', default: false })
  nearbyParking: boolean;

  // Ванная комната
  @Column({ type: 'boolean', default: false })
  shower: boolean;

  @Column({ type: 'boolean', default: false })
  bathtub: boolean;

  @Column({ type: 'boolean', default: false })
  jacuzzi: boolean;

  @Column({ type: 'boolean', default: false })
  towels: boolean;

  @Column({ type: 'boolean', default: false })
  bathrobe: boolean;

  @Column({ type: 'boolean', default: false })
  slippers: boolean;

  @Column({ type: 'boolean', default: false })
  hairdryer: boolean;

  @Column({ type: 'boolean', default: false })
  shampoo: boolean;

  @Column({ type: 'boolean', default: false })
  shower_gel: boolean;

  // Подходит для
  @Column({ type: 'boolean', default: false })
  non_smokers: boolean;

  @Column({ type: 'boolean', default: false })
  parties: boolean;

  @Column({ type: 'boolean', default: false })
  business_trip_documents: boolean;

  @Column({ type: 'boolean', default: false })
  overnight_stay: boolean;

  @Column({ type: 'boolean', default: false })
  with_kids: boolean;

  @Column({ type: 'boolean', default: false })
  with_pets: boolean;
}
