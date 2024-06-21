"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const Category_1 = require("./Category");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
const Column_1 = require("../../../../src/decorator/columns/Column");
const ManyToOne_1 = require("../../../../src/decorator/relations/ManyToOne");
const JoinColumn_1 = require("../../../../src/decorator/relations/JoinColumn");
const src_1 = require("../../../../src");
let Post = class Post {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "categoryId", void 0);
tslib_1.__decorate([
    (0, ManyToOne_1.ManyToOne)(() => Category_1.Category, (category) => category.posts, {
        orphanedRowAction: "soft-delete",
    }),
    (0, JoinColumn_1.JoinColumn)({ name: "categoryId" }),
    tslib_1.__metadata("design:type", Category_1.Category)
], Post.prototype, "category", void 0);
tslib_1.__decorate([
    (0, src_1.DeleteDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], Post.prototype, "deletedAt", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map