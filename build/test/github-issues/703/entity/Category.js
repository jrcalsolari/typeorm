"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const Column_1 = require("../../../../src/decorator/columns/Column");
const ManyToOne_1 = require("../../../../src/decorator/relations/ManyToOne");
const Post_1 = require("./Post");
const PrimaryColumn_1 = require("../../../../src/decorator/columns/PrimaryColumn");
const RelationId_1 = require("../../../../src/decorator/relations/RelationId");
let Category = class Category {
};
exports.Category = Category;
tslib_1.__decorate([
    (0, PrimaryColumn_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "firstId", void 0);
tslib_1.__decorate([
    (0, PrimaryColumn_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "secondId", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
tslib_1.__decorate([
    (0, ManyToOne_1.ManyToOne)((type) => Post_1.Post, (post) => post.categories),
    tslib_1.__metadata("design:type", Post_1.Post)
], Category.prototype, "post", void 0);
tslib_1.__decorate([
    (0, RelationId_1.RelationId)((category) => category.post),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "postId", void 0);
exports.Category = Category = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Category);
//# sourceMappingURL=Category.js.map