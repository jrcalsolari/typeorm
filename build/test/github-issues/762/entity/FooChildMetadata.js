"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooChildMetadata = void 0;
const tslib_1 = require("tslib");
const Column_1 = require("../../../../src/decorator/columns/Column");
class FooChildMetadata {
}
exports.FooChildMetadata = FooChildMetadata;
tslib_1.__decorate([
    (0, Column_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], FooChildMetadata.prototype, "something", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Number)
], FooChildMetadata.prototype, "somethingElse", void 0);
//# sourceMappingURL=FooChildMetadata.js.map