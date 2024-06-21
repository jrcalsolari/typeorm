"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../../src/decorator/columns/PrimaryGeneratedColumn");
const Column_1 = require("../../../../../src/decorator/columns/Column");
const VersionColumn_1 = require("../../../../../src/decorator/columns/VersionColumn");
const Post_1 = require("./Post");
const src_1 = require("../../../../../src");
let Category = class Category {
};
exports.Category = Category;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "description", void 0);
tslib_1.__decorate([
    (0, VersionColumn_1.VersionColumn)(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "version", void 0);
tslib_1.__decorate([
    (0, src_1.OneToMany)(() => Post_1.Post, (post) => post.category),
    tslib_1.__metadata("design:type", Array)
], Category.prototype, "posts", void 0);
exports.Category = Category = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Category);
//# sourceMappingURL=Category.js.map