"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
const Column_1 = require("../../../../src/decorator/columns/Column");
let Post = class Post {
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
};
exports.Post = Post;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)({ name: "title" }),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "_title", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "text", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map