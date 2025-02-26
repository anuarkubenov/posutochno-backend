import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apartment } from './entities/apartment.entity';
import { ApartmentPhoto } from './entities/apartment-photo.entity';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
    @InjectRepository(ApartmentPhoto)
    private readonly photoRepository: Repository<ApartmentPhoto>,
  ) {}

  async findAll() {
    // Получить все квартиры вместе с фотографиями
    const apartments = await this.apartmentRepository.find({
      relations: ['photos'],
    });
    return apartments;
  }

  async findOne(id: number) {
    return this.apartmentRepository.findOne({
      where: { id },
      relations: ['photos'], // Загрузить связанные фотографии
    });
  }

  async delete(id: number): Promise<void> {
    const apartment = await this.apartmentRepository.findOne({
      where: { id },
      relations: ['photos'], // Удаляем также связанные фото
    });

    if (!apartment) {
      throw new Error(`Apartment with id ${id} not found`);
    }

    // Удаляем все связанные фотографии
    if (apartment.photos && apartment.photos.length > 0) {
      await this.photoRepository.remove(apartment.photos);
    }

    // Удаляем саму квартиру
    await this.apartmentRepository.remove(apartment);
  }

  async create(
    data: Partial<Apartment>,
    photos: { filename: string; path: string }[],
    mainPhotoPath: string | null,
    video: string | null,
  ) {
    const apartment = this.apartmentRepository.create({
      ...data,
      main_photo: mainPhotoPath, // Сохранить путь к главному фото
      video: video, // Сохранение пути к видео
    });
    const savedApartment = await this.apartmentRepository.save(apartment);

    const photoEntities = photos?.map((file) => ({
      filename: file.filename,
      path: file.path,
    }));

    await this.photoRepository.save(
      photoEntities.map((photo) =>
        this.photoRepository.create({ ...photo, apartment: savedApartment }),
      ),
    );

    return savedApartment;
  }

  async update(
    id: number,
    data: Partial<Apartment>,
    photos: (Express.Multer.File | { id: number; path: string })[],
    mainPhoto?: Express.Multer.File | string | null,
    video?: Express.Multer.File | string | null,
  ) {
    const apartment = await this.apartmentRepository.findOne({
      where: { id },
      relations: ['photos'],
    });

    if (!apartment) {
      throw new Error(`Apartment with id ${id} not found`);
    }

    // Обновляем главное фото
    if (mainPhoto) {
      apartment.main_photo =
        typeof mainPhoto === 'string' ? mainPhoto : mainPhoto.path;
    }

    // Обновляем видео
    if (video) {
      apartment.video = typeof video === 'string' ? video : video.path;
    }

    // Обновляем остальные поля квартиры
    Object.assign(apartment, data);

    // Разделяем переданные фото на существующие и новые
    const existingPhotos: { id: number; path: string }[] = [];
    const newPhotos: Express.Multer.File[] = [];

    photos.forEach((photo) => {
      if ('id' in photo && 'path' in photo) {
        existingPhotos.push(photo); // Старое фото
      } else {
        newPhotos.push(photo as Express.Multer.File); // Новое фото
      }
    });

    // Удаляем фотографии, которые больше не переданы
    const existingPhotoIds = existingPhotos.map((photo) => photo.id);
    const photosToRemove = (apartment.photos || []).filter(
      (photo) => !existingPhotoIds.includes(photo.id),
    );
    console.log('photosToRemove', photosToRemove);

    if (photosToRemove.length > 0) {
      console.log(
        'Удаляем фотографии, которые больше не переданы',
        photosToRemove,
      );
      // Отключаем фотографии от квартиры
      photosToRemove.forEach((photo) => {
        photo.apartment = null;
      });

      await this.photoRepository.remove(photosToRemove);
    }

    // Добавляем новые фотографии
    if (newPhotos.length > 0) {
      console.log('Добавляем новые фотографии');
      const newPhotoEntities = newPhotos.map((file) => {
        if (!file.filename || !file.path) {
          throw new Error('New photo is missing filename or path');
        }

        return this.photoRepository.create({
          filename: file.filename,
          path: file.path,
          apartment,
        });
      });

      const savedPhotos = await this.photoRepository.save(newPhotoEntities);

      // Явное добавление новых фотографий в массив photos у объекта apartment
      apartment.photos.push(...savedPhotos);
    }

    // Сохраняем обновленную квартиру
    return this.apartmentRepository.save(apartment);
  }
}
