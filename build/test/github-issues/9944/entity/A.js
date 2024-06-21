"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const B_1 = require("./B");
let A = class A {
};
exports.A = A;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("increment"),
    tslib_1.__metadata("design:type", Number)
], A.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(() => B_1.B),
    tslib_1.__metadata("design:type", B_1.B)
], A.prototype, "b", void 0);
exports.A = A = tslib_1.__decorate([
    (0, src_1.Entity)()
], A);
//# sourceMappingURL=A.js.map