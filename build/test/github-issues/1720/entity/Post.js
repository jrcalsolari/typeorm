"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Category_1 = require("./Category");
let Post = class Post {
    get categories() {
        return this._categories;
    }
    set categories(arr) {
        this._categories = arr;
    }
};
exports.Post = Post;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "title", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToMany)(() => Category_1.Category),
    (0, src_1.JoinTable)(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], Post.prototype, "categories", null);
exports.Post = Post = tslib_1.__decorate([
    (0, src_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map