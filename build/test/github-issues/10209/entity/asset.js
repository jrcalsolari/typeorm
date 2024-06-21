"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetEntity = exports.AssetStatus = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const configuration_1 = require("./configuration");
var AssetStatus;
(function (AssetStatus) {
    AssetStatus[AssetStatus["new"] = 0] = "new";
    AssetStatus[AssetStatus["deleted"] = -999] = "deleted";
})(AssetStatus || (exports.AssetStatus = AssetStatus = {}));
let AssetEntity = class AssetEntity {
};
exports.AssetEntity = AssetEntity;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], AssetEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], AssetEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "uuid" }),
    tslib_1.__metadata("design:type", String)
], AssetEntity.prototype, "configuration_id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], AssetEntity.prototype, "status", void 0);
tslib_1.__decorate([
    (0, src_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], AssetEntity.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, src_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], AssetEntity.prototype, "updated_at", void 0);
tslib_1.__decorate([
    (0, src_1.DeleteDateColumn)(),
    tslib_1.__metadata("design:type", Object)
], AssetEntity.prototype, "deleted_at", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToOne)(() => configuration_1.ConfigurationEntity, { nullable: false }),
    (0, src_1.JoinColumn)({ name: "configuration_id" }),
    tslib_1.__metadata("design:type", configuration_1.ConfigurationEntity)
], AssetEntity.prototype, "configuration", void 0);
exports.AssetEntity = AssetEntity = tslib_1.__decorate([
    (0, src_1.Entity)("assets")
], AssetEntity);
//# sourceMappingURL=asset.js.map