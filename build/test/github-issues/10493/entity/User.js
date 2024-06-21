"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
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
    tslib_1.__metadata("design:type", Number)
], User.prototype, "age", void 0);
tslib_1.__decorate([
    (0, src_1.CreateDateColumn)({ type: "timestamp with time zone" }),
    (0, src_1.Index)("IX_User_createdAt"),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
exports.User = User = tslib_1.__decorate([
    (0, src_1.Entity)()
], User);
//# sourceMappingURL=User.js.map