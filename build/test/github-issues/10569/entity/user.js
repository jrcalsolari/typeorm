"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("varchar"),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
exports.User = User = tslib_1.__decorate([
    (0, src_1.Entity)({ name: "user" })
], User);
//# sourceMappingURL=user.js.map