"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Product = class Product {
    constructor(name, label, price) {
        this.name = name;
        this.label = label;
        this.price = price;
    }
};
exports.Product = Product;
tslib_1.__decorate([
    (0, src_1.ObjectIdColumn)(),
    tslib_1.__metadata("design:type", src_1.ObjectId)
], Product.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "label", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
exports.Product = Product = tslib_1.__decorate([
    (0, src_1.Entity)(),
    tslib_1.__metadata("design:paramtypes", [String, String, Number])
], Product);
//# sourceMappingURL=Product.js.map