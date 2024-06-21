"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../../../src/decorator/columns/PrimaryGeneratedColumn");
const Column_1 = require("../../../../../../src/decorator/columns/Column");
const Post_1 = require("./Post");
const ManyToMany_1 = require("../../../../../../src/decorator/relations/ManyToMany");
let Image = class Image {
};
exports.Image = Image;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Image.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Image.prototype, "url", void 0);
tslib_1.__decorate([
    (0, ManyToMany_1.ManyToMany)((type) => Post_1.Post, (post) => post.images),
    tslib_1.__metadata("design:type", Array)
], Image.prototype, "posts", void 0);
exports.Image = Image = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Image);
//# sourceMappingURL=Image.js.map