"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Post = class Post {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.CreateDateColumn)({
        precision: null,
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
    }),
    tslib_1.__metadata("design:type", Date)
], Post.prototype, "createDate", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, src_1.Entity)()
], Post);
//# sourceMappingURL=Post.js.map