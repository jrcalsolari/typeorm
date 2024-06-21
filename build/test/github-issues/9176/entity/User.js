"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckedUser = exports.User = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "middleName", void 0);
exports.User = User = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.Unique)(["firstName", "lastName", "middleName"])
], User);
let CheckedUser = class CheckedUser {
};
exports.CheckedUser = CheckedUser;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], CheckedUser.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], CheckedUser.prototype, "age", void 0);
exports.CheckedUser = CheckedUser = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.Check)(`"age" > 18`)
], CheckedUser);
//# sourceMappingURL=User.js.map