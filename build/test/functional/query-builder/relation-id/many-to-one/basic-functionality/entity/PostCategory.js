"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCategory = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../../../../src/decorator/entity/Entity");
const ManyToOne_1 = require("../../../../../../../src/decorator/relations/ManyToOne");
const Post_1 = require("./Post");
const Category_1 = require("./Category");
const Image_1 = require("./Image");
const src_1 = require("../../../../../../../src");
let PostCategory = class PostCategory {
};
exports.PostCategory = PostCategory;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], PostCategory.prototype, "postId", void 0);
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], PostCategory.prototype, "categoryId", void 0);
tslib_1.__decorate([
    (0, ManyToOne_1.ManyToOne)((type) => Post_1.Post, (post) => post.categories),
    tslib_1.__metadata("design:type", Post_1.Post)
], PostCategory.prototype, "post", void 0);
tslib_1.__decorate([
    (0, ManyToOne_1.ManyToOne)((type) => Category_1.Category, (category) => category.posts),
    tslib_1.__metadata("design:type", Category_1.Category)
], PostCategory.prototype, "category", void 0);
tslib_1.__decorate([
    (0, ManyToOne_1.ManyToOne)((type) => Image_1.Image),
    tslib_1.__metadata("design:type", Image_1.Image)
], PostCategory.prototype, "image", void 0);
exports.PostCategory = PostCategory = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], PostCategory);
//# sourceMappingURL=PostCategory.js.map