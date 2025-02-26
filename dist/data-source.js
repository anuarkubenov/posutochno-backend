"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const apartment_entity_1 = require("./apartments/entities/apartment.entity");
const apartment_photo_entity_1 = require("./apartments/entities/apartment-photo.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'BArcelona11229!',
    database: 'apartments',
    entities: [apartment_entity_1.Apartment, apartment_photo_entity_1.ApartmentPhoto],
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
//# sourceMappingURL=data-source.js.map