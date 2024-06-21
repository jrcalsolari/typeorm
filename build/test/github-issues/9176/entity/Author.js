"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Author = class Author {
};
exports.Author = Author;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Author.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "name", void 0);
exports.Author = Author = tslib_1.__decorate([
    (0, src_1.Entity)()
], Author);
//# sourceMappingURL=Author.js.map