"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const Column_1 = require("../../../../src/decorator/columns/Column");
const PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
const OneToMany_1 = require("../../../../src/decorator/relations/OneToMany");
const Category_1 = require("./Category");
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
    (0, OneToMany_1.OneToMany)((type) => Category_1.Category, (category) => category.post),
    tslib_1.__metadata("design:type", Promise)
], Post.prototype, "categories", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map