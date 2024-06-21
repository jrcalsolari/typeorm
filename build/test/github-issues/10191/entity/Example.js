"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Example = class Example {
};
exports.Example = Example;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], Example.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "text" }),
    tslib_1.__metadata("design:type", String)
], Example.prototype, "nonNullable", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "text", nullable: true }),
    tslib_1.__metadata("design:type", Object)
], Example.prototype, "nullable", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "text" }),
    tslib_1.__metadata("design:type", String)
], Example.prototype, "value", void 0);
exports.Example = Example = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.Index)(["nonNullable", "nullable"], {
        unique: true,
        where: '"nullable" IS NOT NULL',
    })
], Example);
//# sourceMappingURL=Example.js.map