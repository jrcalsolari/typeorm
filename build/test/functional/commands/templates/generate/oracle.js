"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oracle = void 0;
exports.oracle = {
    control: `import { MigrationInterface, QueryRunner } from "typeorm";

export class TestMigration1610975184784 implements MigrationInterface {
    name = 'TestMigration1610975184784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(\`CREATE TABLE "post" ("id" number GENERATED BY DEFAULT AS IDENTITY, "title" varchar2(255) NOT NULL, "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))\`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(\`DROP TABLE "post"\`);
    }

}`,
    javascript: `const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class TestMigration1610975184784 {
    name = 'TestMigration1610975184784'

    async up(queryRunner) {
        await queryRunner.query(\`CREATE TABLE "post" ("id" number GENERATED BY DEFAULT AS IDENTITY, "title" varchar2(255) NOT NULL, "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))\`);
    }

    async down(queryRunner) {
        await queryRunner.query(\`DROP TABLE "post"\`);
    }
}`,
    timestamp: `import { MigrationInterface, QueryRunner } from "typeorm";

export class TestMigration1641163894670 implements MigrationInterface {
    name = 'TestMigration1641163894670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(\`CREATE TABLE "post" ("id" number GENERATED BY DEFAULT AS IDENTITY, "title" varchar2(255) NOT NULL, "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))\`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(\`DROP TABLE "post"\`);
    }

}`,
};
//# sourceMappingURL=oracle.js.map