import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Apartment } from './apartment.entity';

@Entity()
export class ApartmentPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  path: string;

  @CreateDateColumn()
  uploadedAt: Date;

  @ManyToOne(() => Apartment, (apartment) => apartment.photos, { onDelete: 'CASCADE' })
  apartment: Apartment;
  }
