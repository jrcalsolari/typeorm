"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
const Column_1 = require("../../../../src/decorator/columns/Column");
const Category_1 = require("./Category");
const OneToOne_1 = require("../../../../src/decorator/relations/OneToOne");
const JoinColumn_1 = require("../../../../src/decorator/relations/JoinColumn");
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
], Post.prototype, "title", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "categoryName", void 0);
tslib_1.__decorate([
    (0, OneToOne_1.OneToOne)((type) => Category_1.Category, (category) => category.post),
    (0, JoinColumn_1.JoinColumn)({ name: "categoryName", referencedColumnName: "name" }),
    tslib_1.__metadata("design:type", Category_1.Category)
], Post.prototype, "category", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map