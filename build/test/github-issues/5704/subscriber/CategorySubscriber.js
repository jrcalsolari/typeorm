"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySubscriber = void 0;
const tslib_1 = require("tslib");
const Category_1 = require("../entity/Category");
const src_1 = require("../../../../src");
let CategorySubscriber = class CategorySubscriber {
    listenTo() {
        return Category_1.Category;
    }
    async afterLoad(entity) {
        entity.addedProp = true;
    }
};
exports.CategorySubscriber = CategorySubscriber;
exports.CategorySubscriber = CategorySubscriber = tslib_1.__decorate([
    (0, src_1.EventSubscriber)()
], CategorySubscriber);
//# sourceMappingURL=CategorySubscriber.js.map