"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const apartments_controller_1 = require("./apartments.controller");
const apartments_service_1 = require("./apartments.service");
const apartment_entity_1 = require("./entities/apartment.entity");
const apartment_photo_entity_1 = require("./entities/apartment-photo.entity");
let ApartmentsModule = class ApartmentsModule {
};
exports.ApartmentsModule = ApartmentsModule;
exports.ApartmentsModule = ApartmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([apartment_entity_1.Apartment, apartment_photo_entity_1.ApartmentPhoto])],
        controllers: [apartments_controller_1.ApartmentsController],
        providers: [apartments_service_1.ApartmentsService],
    })
], ApartmentsModule);
//# sourceMappingURL=apartments.module.js.map