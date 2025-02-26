import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateApartmentTable1737353921227 implements MigrationInterface {
    name = 'CreateApartmentTable1737353921227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "apartment_photo" ("id" SERIAL NOT NULL, "filename" character varying NOT NULL, "path" character varying NOT NULL, "uploadedAt" TIMESTAMP NOT NULL DEFAULT now(), "apartmentId" integer, CONSTRAINT "PK_4821f1369d4b3cb3bc6750da05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "apartment" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text, "price" numeric(10,2) NOT NULL, "media" text, "rooms" integer NOT NULL, "floor" character varying(255), "area" integer NOT NULL, "condition" character varying(255) NOT NULL, "studio_kitchen" boolean NOT NULL DEFAULT false, "city" character varying(255) NOT NULL, "complex" character varying(255), "street" character varying(255) NOT NULL, "house_number" character varying(255) NOT NULL, "latitude" numeric(9,6) NOT NULL, "longitude" numeric(9,6) NOT NULL, "check_in_time" character varying(255) NOT NULL, "check_out_time" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c3d874d9924f6f16223162b3d3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "apartment_photo" ADD CONSTRAINT "FK_1958db42237c81585272490142c" FOREIGN KEY ("apartmentId") REFERENCES "apartment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment_photo" DROP CONSTRAINT "FK_1958db42237c81585272490142c"`);
        await queryRunner.query(`DROP TABLE "apartment"`);
        await queryRunner.query(`DROP TABLE "apartment_photo"`);
    }

}
