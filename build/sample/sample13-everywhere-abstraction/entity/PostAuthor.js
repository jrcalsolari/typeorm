"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAuthor = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../../src/index");
const Post_1 = require("./Post");
const OneToMany_1 = require("../../../src/decorator/relations/OneToMany");
const PostUser_1 = require("./PostUser");
let PostAuthor = class PostAuthor extends PostUser_1.PostUser {
};
exports.PostAuthor = PostAuthor;
tslib_1.__decorate([
    (0, index_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], PostAuthor.prototype, "id", void 0);
tslib_1.__decorate([
    (0, index_1.Column)(),
    tslib_1.__metadata("design:type", String)
], PostAuthor.prototype, "name", void 0);
tslib_1.__decorate([
    (0, OneToMany_1.OneToMany)((type) => Post_1.Post, (post) => post.author),
    tslib_1.__metadata("design:type", Array)
], PostAuthor.prototype, "posts", void 0);
exports.PostAuthor = PostAuthor = tslib_1.__decorate([
    (0, index_1.Entity)("sample13_post_author")
], PostAuthor);
//# sourceMappingURL=PostAuthor.js.map