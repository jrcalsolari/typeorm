"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Book = class Book {
};
exports.Book = Book;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Book.prototype, "name", void 0);
exports.Book = Book = tslib_1.__decorate([
    (0, src_1.Entity)()
], Book);
//# sourceMappingURL=Book.js.map