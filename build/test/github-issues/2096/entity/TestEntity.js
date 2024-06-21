"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEntity = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let TestEntity = class TestEntity {
};
exports.TestEntity = TestEntity;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], TestEntity.prototype, "id", void 0);
exports.TestEntity = TestEntity = tslib_1.__decorate([
    (0, src_1.Entity)()
], TestEntity);
//# sourceMappingURL=TestEntity.js.map