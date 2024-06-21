"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMaterializedView = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let PostMaterializedView = class PostMaterializedView {
};
exports.PostMaterializedView = PostMaterializedView;
tslib_1.__decorate([
    (0, src_1.ViewColumn)(),
    tslib_1.__metadata("design:type", Number)
], PostMaterializedView.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.ViewColumn)(),
    tslib_1.__metadata("design:type", String)
], PostMaterializedView.prototype, "type", void 0);
exports.PostMaterializedView = PostMaterializedView = tslib_1.__decorate([
    (0, src_1.ViewEntity)({
        expression: `SELECT * FROM "post"`,
        materialized: true,
    })
], PostMaterializedView);
//# sourceMappingURL=PostMaterializedView.js.map