"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable1699343893360 = void 0;
class CreateTable1699343893360 {
    constructor() {
        this.name = "CreateTable1699343893360";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "foo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "bar" numeric(12,7) array NOT NULL, CONSTRAINT "PK_foo" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "foo"`);
    }
}
exports.CreateTable1699343893360 = CreateTable1699343893360;
//# sourceMappingURL=1699343893360-create-table.js.map