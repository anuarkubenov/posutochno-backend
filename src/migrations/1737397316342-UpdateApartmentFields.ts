import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateApartmentFields1737397316342 implements MigrationInterface {
    name = 'UpdateApartmentFields1737397316342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment" ADD "internet" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "tv" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "washing_machine" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "microwave" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "iron" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "dishes" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "air_conditioner" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "dishwasher" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "elevator" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "coffee_machine" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "intercom" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "videoIntercom" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "electronicLocks" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "parking" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "nearbyParking" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "shower" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "bathtub" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "jacuzzi" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "towels" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "bathrobe" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "slippers" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "hairdryer" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "shampoo" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "shower_gel" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "non_smokers" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "parties" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "business_trip_documents" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "overnight_stay" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "with_kids" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD "with_pets" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "with_pets"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "with_kids"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "overnight_stay"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "business_trip_documents"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "parties"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "non_smokers"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "shower_gel"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "shampoo"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "hairdryer"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "slippers"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "bathrobe"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "towels"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "jacuzzi"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "bathtub"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "shower"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "nearbyParking"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "parking"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "electronicLocks"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "videoIntercom"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "intercom"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "coffee_machine"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "elevator"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "dishwasher"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "air_conditioner"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "dishes"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "iron"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "microwave"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "washing_machine"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "tv"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "internet"`);
    }

}
