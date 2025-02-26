import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFiles,
  UseInterceptors,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from '../multer.config';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Get()
  findAll() {
    return this.apartmentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.apartmentsService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'photos', maxCount: 10 },
        { name: 'main_photo', maxCount: 1 },
        { name: 'video', maxCount: 1 }, // Для загрузки одного видео
      ],
      multerOptions,
    ),
  )
  async createApartment(
    @Body() createApartmentDto: CreateApartmentDto,
    @UploadedFiles()
    files: {
      photos?: Express.Multer.File[];
      main_photo?: Express.Multer.File[];
      video?: Express.Multer.File[];
    },
    @Body('existing_photos') existingPhotos: string, // Принимаем как строку
  ) {
    let oldPhotos = [];
    if (existingPhotos) {
      oldPhotos = JSON.parse(existingPhotos); // Преобразуем в массив
    }

    return this.apartmentsService.create(
      createApartmentDto,
      [...(files.photos || []), ...oldPhotos], // Комбинируем новые и старые файлы
      files.main_photo?.[0]?.path || null,
      files.video?.[0].path || null,
      // Передать путь к главному фото
    );
  }

  @Delete(':id')
  async deleteApartment(@Param('id') id: number) {
    console.log('ID', id);  // Должно выводиться при вызове
    return this.apartmentsService.delete(id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'photos', maxCount: 100 },
        { name: 'main_photo', maxCount: 1 },
        { name: 'video', maxCount: 1 },
      ],
      {
        dest: './uploads', // Папка для сохранения файлов
      },
    ),
  )
  async updateApartment(
    @Param('id') id: number,
    @Body() updateApartmentDto: UpdateApartmentDto,
    @UploadedFiles()
    files: {
      photos: Express.Multer.File[];
      main_photo: Express.Multer.File[];
      video?: Express.Multer.File[];
    },
    @Body('existing_photos') existingPhotos: string,
  ) {
    // Парсим старые фото из строки в объект 
    let oldPhotos = [];
    if (!!existingPhotos) {
      if (Array.isArray(existingPhotos)) {
        oldPhotos = existingPhotos 
          .map((photoStr) => {
            try {
              return JSON.parse(photoStr);
            } catch (error) {
              console.error('Ошибка парсинга фото:', photoStr, error);
              return null;
            }
          })
          .filter(Boolean); // Фильтруем null значения
      } else {
        oldPhotos.push(JSON.parse(existingPhotos));
      }
    }

    return this.apartmentsService.update(
      id,
      updateApartmentDto,
      [...(files.photos || []), ...oldPhotos], // Передаем и новые, и старые фото
      files.main_photo?.[0]?.path || null,
      files.video?.[0]?.path || null,
    );
  }
}
