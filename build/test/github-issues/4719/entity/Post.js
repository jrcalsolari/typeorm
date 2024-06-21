"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../../../src/index");
let Post = class Post {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, index_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, index_1.Column)("hstore", { hstoreType: "object" }),
    tslib_1.__metadata("design:type", Object)
], Post.prototype, "hstoreObj", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, index_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map