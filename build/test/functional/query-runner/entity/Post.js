"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Post = class Post {
};
exports.Post = Post;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ unique: true }),
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "version", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ default: "My post" }),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "text", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Post.prototype, "tag", void 0);
exports.Post = Post = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.Unique)(["text", "tag"]),
    (0, src_1.Exclusion)(`USING gist ("name" WITH =)`),
    (0, src_1.Check)(`"version" < 999`) // should be properly escaped for each driver.
    // @Check(`\`version\` < 999`) // should be properly escaped for each driver.
], Post);
//# sourceMappingURL=Post.js.map