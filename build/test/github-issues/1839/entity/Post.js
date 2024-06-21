"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const JoinTable_1 = require("../../../../src/decorator/relations/JoinTable");
const Category_1 = require("./Category");
let Post = class Post {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)({ collation: "utf8_unicode_ci", charset: "utf8" }),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToMany)((type) => Category_1.Category, (category) => category.posts),
    (0, JoinTable_1.JoinTable)(),
    tslib_1.__metadata("design:type", Array)
], Post.prototype, "categories", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, src_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map