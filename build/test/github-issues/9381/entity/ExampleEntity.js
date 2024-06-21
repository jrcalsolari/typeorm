"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleEntity = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const ID_TRANSFORMER = {
    from: (dbValue) => dbValue?.toString(),
    to: (entityValue) => entityValue ? Number(entityValue) : entityValue,
};
let ExampleEntity = class ExampleEntity {
};
exports.ExampleEntity = ExampleEntity;
tslib_1.__decorate([
    (0, src_1.Generated)("increment"),
    (0, src_1.PrimaryColumn)({
        type: "integer",
        transformer: ID_TRANSFORMER,
    }),
    tslib_1.__metadata("design:type", String)
], ExampleEntity.prototype, "id", void 0);
exports.ExampleEntity = ExampleEntity = tslib_1.__decorate([
    (0, src_1.Entity)()
], ExampleEntity);
//# sourceMappingURL=ExampleEntity.js.map