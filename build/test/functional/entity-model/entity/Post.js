"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Category_1 = require("./Category");
let Post = class Post extends src_1.BaseEntity {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        nullable: true,
        unique: true,
    }),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "externalId", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "title", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        default: "This is default text.",
    }),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "text", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToMany)((type) => Category_1.Category),
    (0, src_1.JoinTable)(),
    tslib_1.__metadata("design:type", Array)
], Post.prototype, "categories", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, src_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map