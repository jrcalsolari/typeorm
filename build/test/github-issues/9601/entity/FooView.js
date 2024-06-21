"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooView = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Foo_1 = require("./Foo");
let FooView = class FooView {
};
exports.FooView = FooView;
tslib_1.__decorate([
    (0, src_1.ViewColumn)(),
    tslib_1.__metadata("design:type", Date)
], FooView.prototype, "updatedAt", void 0);
exports.FooView = FooView = tslib_1.__decorate([
    (0, src_1.ViewEntity)({
        name: "foo_view",
        schema: "TYPEORM",
        expression: (connection) => connection.createQueryBuilder(Foo_1.Foo, "foo").select(`foo.updatedAt`),
    })
], FooView);
//# sourceMappingURL=FooView.js.map