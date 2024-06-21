"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const ExampleText_1 = require("./ExampleText");
let Example = class Example {
};
exports.Example = Example;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", String)
], Example.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.OneToOne)(() => ExampleText_1.ExampleText),
    (0, src_1.JoinColumn)(),
    tslib_1.__metadata("design:type", ExampleText_1.ExampleText)
], Example.prototype, "exampleText", void 0);
exports.Example = Example = tslib_1.__decorate([
    (0, src_1.Entity)()
], Example);
//# sourceMappingURL=Example.js.map