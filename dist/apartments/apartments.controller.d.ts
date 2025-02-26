import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
export declare class ApartmentsController {
    private readonly apartmentsService;
    constructor(apartmentsService: ApartmentsService);
    findAll(): Promise<import("./entities/apartment.entity").Apartment[]>;
    findOne(id: number): Promise<import("./entities/apartment.entity").Apartment>;
    createApartment(createApartmentDto: CreateApartmentDto, files: {
        photos?: Express.Multer.File[];
        main_photo?: Express.Multer.File[];
        video?: Express.Multer.File[];
    }, existingPhotos: string): Promise<import("./entities/apartment.entity").Apartment>;
    deleteApartment(id: number): Promise<void>;
    updateApartment(id: number, updateApartmentDto: UpdateApartmentDto, files: {
        photos: Express.Multer.File[];
        main_photo: Express.Multer.File[];
        video?: Express.Multer.File[];
    }, existingPhotos: string): Promise<import("./entities/apartment.entity").Apartment>;
}
