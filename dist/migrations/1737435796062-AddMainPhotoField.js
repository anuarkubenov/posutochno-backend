"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMainPhotoField1737435796062 = void 0;
class AddMainPhotoField1737435796062 {
    constructor() {
        this.name = 'AddMainPhotoField1737435796062';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "apartment" ALTER COLUMN "main_photo" DROP DEFAULT`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "apartment" ALTER COLUMN "main_photo" SET DEFAULT NULL`);
    }
}
exports.AddMainPhotoField1737435796062 = AddMainPhotoField1737435796062;
//# sourceMappingURL=1737435796062-AddMainPhotoField.js.map