import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMainPhotoField1737435796062 implements MigrationInterface {
    name = 'AddMainPhotoField1737435796062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment" ALTER COLUMN "main_photo" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment" ALTER COLUMN "main_photo" SET DEFAULT NULL`);
    }

}
