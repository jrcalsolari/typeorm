"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureWithSRID = exports.FeatureWithoutSRID = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../../src");
let FeatureWithoutSRID = class FeatureWithoutSRID {
};
exports.FeatureWithoutSRID = FeatureWithoutSRID;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], FeatureWithoutSRID.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], FeatureWithoutSRID.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "geometry" }),
    tslib_1.__metadata("design:type", String)
], FeatureWithoutSRID.prototype, "shape", void 0);
exports.FeatureWithoutSRID = FeatureWithoutSRID = tslib_1.__decorate([
    (0, src_1.Entity)()
], FeatureWithoutSRID);
let FeatureWithSRID = class FeatureWithSRID {
};
exports.FeatureWithSRID = FeatureWithSRID;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], FeatureWithSRID.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], FeatureWithSRID.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "geometry", srid: 2326 }),
    tslib_1.__metadata("design:type", String)
], FeatureWithSRID.prototype, "shape", void 0);
exports.FeatureWithSRID = FeatureWithSRID = tslib_1.__decorate([
    (0, src_1.Entity)()
], FeatureWithSRID);
//# sourceMappingURL=Feature.js.map