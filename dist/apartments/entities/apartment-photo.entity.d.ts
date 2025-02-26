import { Apartment } from './apartment.entity';
export declare class ApartmentPhoto {
    id: number;
    filename: string;
    path: string;
    uploadedAt: Date;
    apartment: Apartment;
}
