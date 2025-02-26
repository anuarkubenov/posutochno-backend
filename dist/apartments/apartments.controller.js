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
exports.ApartmentsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const apartments_service_1 = require("./apartments.service");
const create_apartment_dto_1 = require("./dto/create-apartment.dto");
const update_apartment_dto_1 = require("./dto/update-apartment.dto");
const multer_config_1 = require("../multer.config");
let ApartmentsController = class ApartmentsController {
    constructor(apartmentsService) {
        this.apartmentsService = apartmentsService;
    }
    findAll() {
        return this.apartmentsService.findAll();
    }
    async findOne(id) {
        return this.apartmentsService.findOne(id);
    }
    async createApartment(createApartmentDto, files, existingPhotos) {
        let oldPhotos = [];
        if (existingPhotos) {
            oldPhotos = JSON.parse(existingPhotos);
        }
        return this.apartmentsService.create(createApartmentDto, [...(files.photos || []), ...oldPhotos], files.main_photo?.[0]?.path || null, files.video?.[0].path || null);
    }
    async deleteApartment(id) {
        console.log('ID', id);
        return this.apartmentsService.delete(id);
    }
    async updateApartment(id, updateApartmentDto, files, existingPhotos) {
        let oldPhotos = [];
        if (!!existingPhotos) {
            if (Array.isArray(existingPhotos)) {
                oldPhotos = existingPhotos
                    .map((photoStr) => {
                    try {
                        return JSON.parse(photoStr);
                    }
                    catch (error) {
                        console.error('Ошибка парсинга фото:', photoStr, error);
                        return null;
                    }
                })
                    .filter(Boolean);
            }
            else {
                oldPhotos.push(JSON.parse(existingPhotos));
            }
        }
        return this.apartmentsService.update(id, updateApartmentDto, [...(files.photos || []), ...oldPhotos], files.main_photo?.[0]?.path || null, files.video?.[0]?.path || null);
    }
};
exports.ApartmentsController = ApartmentsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApartmentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'photos', maxCount: 10 },
        { name: 'main_photo', maxCount: 1 },
        { name: 'video', maxCount: 1 },
    ], multer_config_1.multerOptions)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)('existing_photos')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_apartment_dto_1.CreateApartmentDto, Object, String]),
    __metadata("design:returntype", Promise)
], ApartmentsController.prototype, "createApartment", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'photos', maxCount: 100 },
        { name: 'main_photo', maxCount: 1 },
        { name: 'video', maxCount: 1 },
    ], {
        dest: './uploads',
    })),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApartmentsController.prototype, "deleteApartment", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __param(3, (0, common_1.Body)('existing_photos')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_apartment_dto_1.UpdateApartmentDto, Object, String]),
    __metadata("design:returntype", Promise)
], ApartmentsController.prototype, "updateApartment", null);
exports.ApartmentsController = ApartmentsController = __decorate([
    (0, common_1.Controller)('apartments'),
    __metadata("design:paramtypes", [apartments_service_1.ApartmentsService])
], ApartmentsController);
//# sourceMappingURL=apartments.controller.js.map