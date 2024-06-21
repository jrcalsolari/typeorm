"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counters = void 0;
const tslib_1 = require("tslib");
const Column_1 = require("../../../../../../../src/decorator/columns/Column");
const ManyToOne_1 = require("../../../../../../../src/decorator/relations/ManyToOne");
const Category_1 = require("./Category");
const Subcounters_1 = require("./Subcounters");
class Counters {
}
exports.Counters = Counters;
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Counters.prototype, "likes", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Counters.prototype, "comments", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Counters.prototype, "favorites", void 0);
tslib_1.__decorate([
    (0, ManyToOne_1.ManyToOne)((type) => Category_1.Category, (category) => category.posts),
    tslib_1.__metadata("design:type", Category_1.Category)
], Counters.prototype, "category", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(() => Subcounters_1.Subcounters, { prefix: "sub" }),
    tslib_1.__metadata("design:type", Subcounters_1.Subcounters)
], Counters.prototype, "subcounters", void 0);
//# sourceMappingURL=Counters.js.map