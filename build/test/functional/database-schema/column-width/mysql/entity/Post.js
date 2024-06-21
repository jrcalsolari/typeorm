"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../../../src/decorator/entity/Entity");
const PrimaryColumn_1 = require("../../../../../../src/decorator/columns/PrimaryColumn");
const Column_1 = require("../../../../../../src/decorator/columns/Column");
let Post = class Post {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, PrimaryColumn_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)("int", { width: 10 }),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "int", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)("tinyint", { width: 2 }),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "tinyint", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)("smallint", { width: 3 }),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "smallint", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)("mediumint", { width: 9 }),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "mediumint", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)("bigint", { width: 10 }),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "bigint", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map