"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVideoField1737561401006 = void 0;
class AddVideoField1737561401006 {
    constructor() {
        this.name = 'AddVideoField1737561401006';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "apartment" ADD "video" character varying(255)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "apartment" DROP COLUMN "video"`);
    }
}
exports.AddVideoField1737561401006 = AddVideoField1737561401006;
//# sourceMappingURL=1737561401006-AddVideoField.js.map