"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slug = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
class Slug {
    constructor(slug) {
        this.slug = slug;
    }
}
exports.Slug = Slug;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], Slug.prototype, "slug", void 0);
//# sourceMappingURL=Slug.js.map