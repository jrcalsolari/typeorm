"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const C_1 = require("./C");
let D = class D {
};
exports.D = D;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("increment"),
    tslib_1.__metadata("design:type", Number)
], D.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToOne)(() => C_1.C, (c) => c.ds, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    tslib_1.__metadata("design:type", C_1.C)
], D.prototype, "c", void 0);
exports.D = D = tslib_1.__decorate([
    (0, src_1.Entity)()
], D);
//# sourceMappingURL=D.js.map