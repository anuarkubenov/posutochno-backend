import { MigrationInterface, QueryRunner } from "typeorm";

export class AddVideoField1737561401006 implements MigrationInterface {
    name = 'AddVideoField1737561401006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment" ADD "video" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "video"`);
    }

}
