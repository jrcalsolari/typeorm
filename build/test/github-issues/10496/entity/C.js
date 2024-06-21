"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Base_1 = require("./Base");
let C = class C extends Base_1.Base {
    constructor(c) {
        super();
        this.c = c;
    }
};
exports.C = C;
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], C.prototype, "c", void 0);
exports.C = C = tslib_1.__decorate([
    (0, src_1.ChildEntity)(),
    tslib_1.__metadata("design:paramtypes", [String])
], C);
//# sourceMappingURL=C.js.map