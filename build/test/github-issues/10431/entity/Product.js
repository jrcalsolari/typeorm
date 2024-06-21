"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Category_1 = require("./Category");
let Product = class Product {
};
exports.Product = Product;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("varchar"),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToMany)(() => Category_1.Category, (category) => category.products, {
        eager: true,
        cascade: ["insert", "update", "remove"],
        orphanedRowAction: "delete",
    }),
    (0, src_1.JoinTable)(),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "categories", void 0);
exports.Product = Product = tslib_1.__decorate([
    (0, src_1.Entity)()
], Product);
//# sourceMappingURL=Product.js.map