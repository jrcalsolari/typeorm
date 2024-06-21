"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bar = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
let Bar = class Bar {
};
exports.Bar = Bar;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Bar.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Bar.prototype, "description", void 0);
exports.Bar = Bar = tslib_1.__decorate([
    (0, Entity_1.Entity)("bar")
], Bar);
//# sourceMappingURL=Bar.js.map