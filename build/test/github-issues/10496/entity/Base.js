"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Base = class Base {
};
exports.Base = Base;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Base.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    (0, src_1.Index)("IX_Base_type"),
    tslib_1.__metadata("design:type", String)
], Base.prototype, "type", void 0);
tslib_1.__decorate([
    (0, src_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], Base.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, src_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], Base.prototype, "updatedAt", void 0);
exports.Base = Base = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.TableInheritance)({ column: { type: String, name: "type" } })
], Base);
//# sourceMappingURL=Base.js.map