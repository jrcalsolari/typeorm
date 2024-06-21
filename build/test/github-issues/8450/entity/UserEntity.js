"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const PrimaryColumn_1 = require("../../../../src/decorator/columns/PrimaryColumn");
const Column_1 = require("../../../../src/decorator/columns/Column");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
tslib_1.__decorate([
    (0, PrimaryColumn_1.PrimaryColumn)("int"),
    tslib_1.__metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)({
        type: "int",
        generatedType: "STORED",
        asExpression: "id * 2",
    }),
    tslib_1.__metadata("design:type", Number)
], UserEntity.prototype, "generated", void 0);
exports.UserEntity = UserEntity = tslib_1.__decorate([
    (0, Entity_1.Entity)("user")
], UserEntity);
//# sourceMappingURL=UserEntity.js.map