"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailMigration1530542855524 = void 0;
class FailMigration1530542855524 {
    async up(queryRunner) {
        throw new Error("migration error");
    }
    async down(queryRunner) {
        throw new Error("migration error");
    }
}
exports.FailMigration1530542855524 = FailMigration1530542855524;
//# sourceMappingURL=1530542855524-FailMigration.js.map