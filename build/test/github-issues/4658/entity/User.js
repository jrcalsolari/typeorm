"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const src_2 = require("../../../../src");
const src_3 = require("../../../../src");
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, src_2.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_3.CreateDateColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, src_3.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "updated_at", void 0);
exports.User = User = tslib_1.__decorate([
    (0, src_1.Entity)()
], User);
//# sourceMappingURL=User.js.map