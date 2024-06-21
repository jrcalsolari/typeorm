"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.PublishInfo = exports.User = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../src");
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.OneToMany)(() => Post, (post) => post.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "posts", void 0);
exports.User = User = tslib_1.__decorate([
    (0, src_1.Entity)()
], User);
class PublishInfo {
}
exports.PublishInfo = PublishInfo;
tslib_1.__decorate([
    (0, src_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", Date)
], PublishInfo.prototype, "date", void 0);
let Post = class Post {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "text", void 0);
tslib_1.__decorate([
    (0, src_1.Column)((_type) => PublishInfo),
    tslib_1.__metadata("design:type", PublishInfo)
], Post.prototype, "blog", void 0);
tslib_1.__decorate([
    (0, src_1.Column)((_type) => PublishInfo),
    tslib_1.__metadata("design:type", PublishInfo)
], Post.prototype, "newsletter", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToOne)(() => User, (user) => user.posts),
    tslib_1.__metadata("design:type", User)
], Post.prototype, "user", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, src_1.Entity)()
], Post);
//# sourceMappingURL=entities.js.map