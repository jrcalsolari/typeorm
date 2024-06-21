"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../../src");
const Post_1 = require("./Post");
let Tag = class Tag {
};
exports.Tag = Tag;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Tag.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Tag.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToMany)(() => Post_1.Post, (post) => post.tags),
    tslib_1.__metadata("design:type", Array)
], Tag.prototype, "posts", void 0);
exports.Tag = Tag = tslib_1.__decorate([
    (0, src_1.Entity)()
], Tag);
//# sourceMappingURL=Tag.js.map