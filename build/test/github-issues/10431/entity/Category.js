"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Product_1 = require("./Product");
let Category = class Category {
};
exports.Category = Category;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.VirtualColumn)({
        query: (alias) => `SELECT COUNT(*) FROM category WHERE id = ${alias}.id`,
    }),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "randomVirtualColumn", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToMany)(() => Product_1.Product, (product) => product.categories),
    tslib_1.__metadata("design:type", Array)
], Category.prototype, "products", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("varchar"),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
exports.Category = Category = tslib_1.__decorate([
    (0, src_1.Entity)()
], Category);
//# sourceMappingURL=Category.js.map