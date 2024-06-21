"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Base_1 = require("./Base");
let A = class A extends Base_1.Base {
    constructor(a) {
        super();
        this.a = a;
    }
};
exports.A = A;
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], A.prototype, "a", void 0);
exports.A = A = tslib_1.__decorate([
    (0, src_1.ChildEntity)(),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], A);
//# sourceMappingURL=A.js.map