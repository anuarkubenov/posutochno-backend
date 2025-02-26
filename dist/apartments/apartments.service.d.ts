import { Repository } from 'typeorm';
import { Apartment } from './entities/apartment.entity';
import { ApartmentPhoto } from './entities/apartment-photo.entity';
export declare class ApartmentsService {
    private readonly apartmentRepository;
    private readonly photoRepository;
    constructor(apartmentRepository: Repository<Apartment>, photoRepository: Repository<ApartmentPhoto>);
    findAll(): Promise<Apartment[]>;
    findOne(id: number): Promise<Apartment>;
    delete(id: number): Promise<void>;
    create(data: Partial<Apartment>, photos: {
        filename: string;
        path: string;
    }[], mainPhotoPath: string | null, video: string | null): Promise<Apartment>;
    update(id: number, data: Partial<Apartment>, photos: (Express.Multer.File | {
        id: number;
        path: string;
    })[], mainPhoto?: Express.Multer.File | string | null, video?: Express.Multer.File | string | null): Promise<Apartment>;
}
