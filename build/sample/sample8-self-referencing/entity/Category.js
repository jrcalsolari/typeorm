"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../../src/index");
const ManyToOne_1 = require("../../../src/decorator/relations/ManyToOne");
const OneToMany_1 = require("../../../src/decorator/relations/OneToMany");
const OneToOne_1 = require("../../../src/decorator/relations/OneToOne");
const JoinColumn_1 = require("../../../src/decorator/relations/JoinColumn");
const JoinTable_1 = require("../../../src/decorator/relations/JoinTable");
let Category = class Category {
};
exports.Category = Category;
tslib_1.__decorate([
    (0, index_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "id", void 0);
tslib_1.__decorate([
    (0, index_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
tslib_1.__decorate([
    (0, OneToOne_1.OneToOne)((type) => Category, (category) => category.oneInverseCategory, {
        cascade: true,
    }),
    (0, JoinColumn_1.JoinColumn)(),
    tslib_1.__metadata("design:type", Category)
], Category.prototype, "oneCategory", void 0);
tslib_1.__decorate([
    (0, OneToOne_1.OneToOne)((type) => Category, (category) => category.oneCategory, {
        cascade: true,
    }),
    tslib_1.__metadata("design:type", Category)
], Category.prototype, "oneInverseCategory", void 0);
tslib_1.__decorate([
    (0, ManyToOne_1.ManyToOne)((type) => Category, (category) => category.oneManyCategories, {
        cascade: true,
    }),
    tslib_1.__metadata("design:type", Category)
], Category.prototype, "oneManyCategory", void 0);
tslib_1.__decorate([
    (0, OneToMany_1.OneToMany)((type) => Category, (category) => category.oneManyCategory, {
        cascade: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Category.prototype, "oneManyCategories", void 0);
tslib_1.__decorate([
    (0, index_1.ManyToMany)((type) => Category, (category) => category.manyInverseCategories, {
        cascade: true,
    }),
    (0, JoinTable_1.JoinTable)(),
    tslib_1.__metadata("design:type", Array)
], Category.prototype, "manyCategories", void 0);
tslib_1.__decorate([
    (0, index_1.ManyToMany)((type) => Category, (category) => category.manyCategories, {
        cascade: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Category.prototype, "manyInverseCategories", void 0);
exports.Category = Category = tslib_1.__decorate([
    (0, index_1.Entity)("sample8_category")
], Category);
//# sourceMappingURL=Category.js.map