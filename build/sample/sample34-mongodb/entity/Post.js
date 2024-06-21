"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../../src/index");
const ObjectIdColumn_1 = require("../../../src/decorator/columns/ObjectIdColumn");
const typings_1 = require("../../../src/driver/mongodb/typings");
let Post = class Post {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, ObjectIdColumn_1.ObjectIdColumn)(),
    tslib_1.__metadata("design:type", typings_1.ObjectId)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, index_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "title", void 0);
tslib_1.__decorate([
    (0, index_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "text", void 0);
tslib_1.__decorate([
    (0, index_1.Column)("int", {
        nullable: false,
    }),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "likesCount", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, index_1.Entity)("sample34_post")
], Post);
//# sourceMappingURL=Post.js.map