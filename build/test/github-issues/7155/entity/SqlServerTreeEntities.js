"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerMultiIdMaterialized = exports.SqlServerMultiIdNested = exports.SqlServerSingleIdMaterialized = exports.SqlServerSingleIdNested = exports.SqlServerSingleIdClosure = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let SqlServerSingleIdClosure = class SqlServerSingleIdClosure {
};
exports.SqlServerSingleIdClosure = SqlServerSingleIdClosure;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], SqlServerSingleIdClosure.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SqlServerSingleIdClosure.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.TreeChildren)(),
    tslib_1.__metadata("design:type", Array)
], SqlServerSingleIdClosure.prototype, "children", void 0);
tslib_1.__decorate([
    (0, src_1.TreeParent)(),
    tslib_1.__metadata("design:type", Object)
], SqlServerSingleIdClosure.prototype, "parent", void 0);
exports.SqlServerSingleIdClosure = SqlServerSingleIdClosure = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.Tree)("closure-table")
], SqlServerSingleIdClosure);
let SqlServerSingleIdNested = class SqlServerSingleIdNested {
};
exports.SqlServerSingleIdNested = SqlServerSingleIdNested;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], SqlServerSingleIdNested.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SqlServerSingleIdNested.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.TreeChildren)(),
    tslib_1.__metadata("design:type", Array)
], SqlServerSingleIdNested.prototype, "children", void 0);
tslib_1.__decorate([
    (0, src_1.TreeParent)(),
    tslib_1.__metadata("design:type", Object)
], SqlServerSingleIdNested.prototype, "parent", void 0);
exports.SqlServerSingleIdNested = SqlServerSingleIdNested = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.Tree)("nested-set")
], SqlServerSingleIdNested);
let SqlServerSingleIdMaterialized = class SqlServerSingleIdMaterialized {
};
exports.SqlServerSingleIdMaterialized = SqlServerSingleIdMaterialized;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], SqlServerSingleIdMaterialized.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SqlServerSingleIdMaterialized.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.TreeChildren)(),
    tslib_1.__metadata("design:type", Array)
], SqlServerSingleIdMaterialized.prototype, "children", void 0);
tslib_1.__decorate([
    (0, src_1.TreeParent)(),
    tslib_1.__metadata("design:type", Object)
], SqlServerSingleIdMaterialized.prototype, "parent", void 0);
exports.SqlServerSingleIdMaterialized = SqlServerSingleIdMaterialized = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.Tree)("materialized-path")
], SqlServerSingleIdMaterialized);
let SqlServerMultiIdNested = class SqlServerMultiIdNested {
};
exports.SqlServerMultiIdNested = SqlServerMultiIdNested;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], SqlServerMultiIdNested.prototype, "column", void 0);
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], SqlServerMultiIdNested.prototype, "row", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SqlServerMultiIdNested.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.TreeChildren)(),
    tslib_1.__metadata("design:type", Array)
], SqlServerMultiIdNested.prototype, "children", void 0);
tslib_1.__decorate([
    (0, src_1.TreeParent)(),
    tslib_1.__metadata("design:type", Object)
], SqlServerMultiIdNested.prototype, "parent", void 0);
exports.SqlServerMultiIdNested = SqlServerMultiIdNested = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.Tree)("nested-set")
], SqlServerMultiIdNested);
let SqlServerMultiIdMaterialized = class SqlServerMultiIdMaterialized {
};
exports.SqlServerMultiIdMaterialized = SqlServerMultiIdMaterialized;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], SqlServerMultiIdMaterialized.prototype, "column", void 0);
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], SqlServerMultiIdMaterialized.prototype, "row", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SqlServerMultiIdMaterialized.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.TreeChildren)(),
    tslib_1.__metadata("design:type", Array)
], SqlServerMultiIdMaterialized.prototype, "children", void 0);
tslib_1.__decorate([
    (0, src_1.TreeParent)(),
    tslib_1.__metadata("design:type", Object)
], SqlServerMultiIdMaterialized.prototype, "parent", void 0);
exports.SqlServerMultiIdMaterialized = SqlServerMultiIdMaterialized = tslib_1.__decorate([
    (0, src_1.Entity)(),
    (0, src_1.Tree)("materialized-path")
], SqlServerMultiIdMaterialized);
//# sourceMappingURL=SqlServerTreeEntities.js.map