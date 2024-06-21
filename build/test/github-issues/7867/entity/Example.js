"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Example = class Example {
};
exports.Example = Example;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Example.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Example.prototype, "name", void 0);
exports.Example = Example = tslib_1.__decorate([
    (0, src_1.Entity)()
], Example);
//# sourceMappingURL=Example.js.map