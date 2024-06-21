"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressHistory = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let AddressHistory = class AddressHistory {
};
exports.AddressHistory = AddressHistory;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, src_1.Index)(),
    (0, src_1.Column)({ type: "uuid" }),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "entityUuid", void 0);
tslib_1.__decorate([
    (0, src_1.Index)(),
    (0, src_1.Column)({ type: "uuid" }),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "addressUuid", void 0);
tslib_1.__decorate([
    (0, src_1.Index)({ spatial: true }),
    (0, src_1.Column)({ type: "int4range" }),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "int4range", void 0);
tslib_1.__decorate([
    (0, src_1.Index)({ spatial: true }),
    (0, src_1.Column)({ type: "int8range" }),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "int8range", void 0);
tslib_1.__decorate([
    (0, src_1.Index)({ spatial: true }),
    (0, src_1.Column)({ type: "numrange" }),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "numrange", void 0);
tslib_1.__decorate([
    (0, src_1.Index)({ spatial: true }),
    (0, src_1.Column)({ type: "tsrange" }),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "tsrange", void 0);
tslib_1.__decorate([
    (0, src_1.Index)({ spatial: true }),
    (0, src_1.Column)({ type: "tstzrange" }),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "tstzrange", void 0);
tslib_1.__decorate([
    (0, src_1.Index)({ spatial: true }),
    (0, src_1.Column)({ type: "daterange" }),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "daterange", void 0);
tslib_1.__decorate([
    (0, src_1.Index)({ spatial: true }),
    (0, src_1.Column)({
        type: "geometry",
        spatialFeatureType: "Point",
        srid: 4326,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], AddressHistory.prototype, "point", void 0);
exports.AddressHistory = AddressHistory = tslib_1.__decorate([
    (0, src_1.Entity)()
], AddressHistory);
//# sourceMappingURL=address-history.js.map