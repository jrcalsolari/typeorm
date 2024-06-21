"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleEntity = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
let ExampleEntity = class ExampleEntity {
};
exports.ExampleEntity = ExampleEntity;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], ExampleEntity.prototype, "id", void 0);
exports.ExampleEntity = ExampleEntity = tslib_1.__decorate([
    (0, Entity_1.Entity)({ name: "example", comment: "table comment" })
], ExampleEntity);
//# sourceMappingURL=ExampleEntity.js.map