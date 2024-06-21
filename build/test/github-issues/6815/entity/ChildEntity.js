"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildEntity = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let ChildEntity = class ChildEntity {
};
exports.ChildEntity = ChildEntity;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    tslib_1.__metadata("design:type", String)
], ChildEntity.prototype, "id", void 0);
exports.ChildEntity = ChildEntity = tslib_1.__decorate([
    (0, src_1.Entity)()
], ChildEntity);
//# sourceMappingURL=ChildEntity.js.map