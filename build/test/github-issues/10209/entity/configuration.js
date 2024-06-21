"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationEntity = exports.ConfigurationStatus = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const asset_1 = require("./asset");
const location_1 = require("./location");
var ConfigurationStatus;
(function (ConfigurationStatus) {
    ConfigurationStatus[ConfigurationStatus["deleted"] = -999] = "deleted";
    ConfigurationStatus[ConfigurationStatus["new"] = 0] = "new";
})(ConfigurationStatus || (exports.ConfigurationStatus = ConfigurationStatus = {}));
let ConfigurationEntity = class ConfigurationEntity {
};
exports.ConfigurationEntity = ConfigurationEntity;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], ConfigurationEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], ConfigurationEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], ConfigurationEntity.prototype, "status", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "uuid", nullable: false }),
    tslib_1.__metadata("design:type", String)
], ConfigurationEntity.prototype, "location_id", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToOne)(() => location_1.LocationEntity, { nullable: false }),
    (0, src_1.JoinColumn)({ name: "location_id" }),
    tslib_1.__metadata("design:type", location_1.LocationEntity)
], ConfigurationEntity.prototype, "location", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], ConfigurationEntity.prototype, "active", void 0);
tslib_1.__decorate([
    (0, src_1.OneToMany)(() => asset_1.AssetEntity, (asset) => asset.configuration, {
        cascade: true,
    }),
    tslib_1.__metadata("design:type", Array)
], ConfigurationEntity.prototype, "assets", void 0);
tslib_1.__decorate([
    (0, src_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], ConfigurationEntity.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, src_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], ConfigurationEntity.prototype, "updated_at", void 0);
exports.ConfigurationEntity = ConfigurationEntity = tslib_1.__decorate([
    (0, src_1.Entity)("configurations")
], ConfigurationEntity);
//# sourceMappingURL=configuration.js.map