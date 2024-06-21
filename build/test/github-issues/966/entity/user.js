"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserInfo = exports.PersonalInfo = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const Column_1 = require("../../../../src/decorator/columns/Column");
const PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
class PersonalInfo {
}
exports.PersonalInfo = PersonalInfo;
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfo.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfo.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], PersonalInfo.prototype, "address", void 0);
class UserInfo extends PersonalInfo {
}
exports.UserInfo = UserInfo;
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], UserInfo.prototype, "userName", void 0);
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)((type) => UserInfo),
    tslib_1.__metadata("design:type", UserInfo)
], User.prototype, "info", void 0);
exports.User = User = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], User);
//# sourceMappingURL=user.js.map