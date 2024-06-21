"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
exports.User = User = tslib_1.__decorate([
    (0, Entity_1.Entity)({ name: "users", synchronize: false })
], User);
//# sourceMappingURL=user.js.map