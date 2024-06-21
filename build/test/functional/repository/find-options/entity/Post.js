"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../../src/decorator/columns/PrimaryGeneratedColumn");
const Column_1 = require("../../../../../src/decorator/columns/Column");
const ManyToMany_1 = require("../../../../../src/decorator/relations/ManyToMany");
const Category_1 = require("./Category");
const ManyToOne_1 = require("../../../../../src/decorator/relations/ManyToOne");
const User_1 = require("./User");
const JoinTable_1 = require("../../../../../src/decorator/relations/JoinTable");
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
    (0, ManyToOne_1.ManyToOne)((type) => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], Post.prototype, "author", void 0);
tslib_1.__decorate([
    (0, ManyToMany_1.ManyToMany)((type) => Category_1.Category),
    (0, JoinTable_1.JoinTable)(),
    tslib_1.__metadata("design:type", Array)
], Post.prototype, "categories", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map