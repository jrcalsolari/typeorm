"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const Column_1 = require("../../../../src/decorator/columns/Column");
const Category_1 = require("./Category");
class Post {
    constructor() {
        this.category = new Category_1.Category();
    }
}
exports.Post = Post;
tslib_1.__decorate([
    (0, Column_1.Column)((type) => Category_1.Category),
    tslib_1.__metadata("design:type", Category_1.Category)
], Post.prototype, "category", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "postNumber", void 0);
//# sourceMappingURL=Post.js.map