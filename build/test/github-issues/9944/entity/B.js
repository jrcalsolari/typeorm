"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const C_1 = require("./C");
class B {
}
exports.B = B;
tslib_1.__decorate([
    (0, src_1.OneToMany)(() => C_1.C, (c) => c.a, {
        cascade: true,
        eager: true,
    }),
    tslib_1.__metadata("design:type", Array)
], B.prototype, "cs", void 0);
//# sourceMappingURL=B.js.map