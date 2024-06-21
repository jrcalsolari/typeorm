"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Base_1 = require("./Base");
let B = class B extends Base_1.Base {
    constructor(b) {
        super();
        this.b = b;
    }
};
exports.B = B;
tslib_1.__decorate([
    (0, src_1.Column)(),
    (0, src_1.Index)("IX_Base_b"),
    tslib_1.__metadata("design:type", Number)
], B.prototype, "b", void 0);
exports.B = B = tslib_1.__decorate([
    (0, src_1.ChildEntity)(),
    tslib_1.__metadata("design:paramtypes", [Number])
], B);
//# sourceMappingURL=B.js.map