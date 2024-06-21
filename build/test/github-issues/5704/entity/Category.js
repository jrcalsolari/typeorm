"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Post_1 = require("./Post");
let Category = class Category {
    constructor() {
        this.addedProp = false;
    }
};
exports.Category = Category;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToMany)(() => Post_1.Post, (o) => o.categories),
    tslib_1.__metadata("design:type", Promise)
], Category.prototype, "posts", void 0);
exports.Category = Category = tslib_1.__decorate([
    (0, src_1.Entity)()
], Category);
//# sourceMappingURL=Category.js.map