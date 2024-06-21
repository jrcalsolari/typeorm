"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
let Post = class Post {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "id", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map