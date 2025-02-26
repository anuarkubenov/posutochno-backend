"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const apartment_entity_1 = require("./entities/apartment.entity");
const apartment_photo_entity_1 = require("./entities/apartment-photo.entity");
let ApartmentsService = class ApartmentsService {
    constructor(apartmentRepository, photoRepository) {
        this.apartmentRepository = apartmentRepository;
        this.photoRepository = photoRepository;
    }
    async findAll() {
        const apartments = await this.apartmentRepository.find({
            relations: ['photos'],
        });
        return apartments;
    }
    async findOne(id) {
        return this.apartmentRepository.findOne({
            where: { id },
            relations: ['photos'],
        });
    }
    async delete(id) {
        const apartment = await this.apartmentRepository.findOne({
            where: { id },
            relations: ['photos'],
        });
        if (!apartment) {
            throw new Error(`Apartment with id ${id} not found`);
        }
        if (apartment.photos && apartment.photos.length > 0) {
            await this.photoRepository.remove(apartment.photos);
        }
        await this.apartmentRepository.remove(apartment);
    }
    async create(data, photos, mainPhotoPath, video) {
        const apartment = this.apartmentRepository.create({
            ...data,
            main_photo: mainPhotoPath,
            video: video,
        });
        const savedApartment = await this.apartmentRepository.save(apartment);
        const photoEntities = photos?.map((file) => ({
            filename: file.filename,
            path: file.path,
        }));
        await this.photoRepository.save(photoEntities.map((photo) => this.photoRepository.create({ ...photo, apartment: savedApartment })));
        return savedApartment;
    }
    async update(id, data, photos, mainPhoto, video) {
        const apartment = await this.apartmentRepository.findOne({
            where: { id },
            relations: ['photos'],
        });
        if (!apartment) {
            throw new Error(`Apartment with id ${id} not found`);
        }
        if (mainPhoto) {
            apartment.main_photo =
                typeof mainPhoto === 'string' ? mainPhoto : mainPhoto.path;
        }
        if (video) {
            apartment.video = typeof video === 'string' ? video : video.path;
        }
        Object.assign(apartment, data);
        const existingPhotos = [];
        const newPhotos = [];
        photos.forEach((photo) => {
            if ('id' in photo && 'path' in photo) {
                existingPhotos.push(photo);
            }
            else {
                newPhotos.push(photo);
            }
        });
        const existingPhotoIds = existingPhotos.map((photo) => photo.id);
        const photosToRemove = (apartment.photos || []).filter((photo) => !existingPhotoIds.includes(photo.id));
        console.log('photosToRemove', photosToRemove);
        if (photosToRemove.length > 0) {
            console.log('Удаляем фотографии, которые больше не переданы', photosToRemove);
            photosToRemove.forEach((photo) => {
                photo.apartment = null;
            });
            await this.photoRepository.remove(photosToRemove);
        }
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
            apartment.photos.push(...savedPhotos);
        }
        return this.apartmentRepository.save(apartment);
    }
};
exports.ApartmentsService = ApartmentsService;
exports.ApartmentsService = ApartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(apartment_entity_1.Apartment)),
    __param(1, (0, typeorm_1.InjectRepository)(apartment_photo_entity_1.ApartmentPhoto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ApartmentsService);
//# sourceMappingURL=apartments.service.js.map