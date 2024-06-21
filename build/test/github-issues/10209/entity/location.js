"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationEntity = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const configuration_1 = require("./configuration");
let LocationEntity = class LocationEntity {
};
exports.LocationEntity = LocationEntity;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], LocationEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ length: 255 }),
    tslib_1.__metadata("design:type", String)
], LocationEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ default: true }),
    tslib_1.__metadata("design:type", Boolean)
], LocationEntity.prototype, "active", void 0);
tslib_1.__decorate([
    (0, src_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], LocationEntity.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, src_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], LocationEntity.prototype, "updated_at", void 0);
tslib_1.__decorate([
    (0, src_1.OneToMany)(() => configuration_1.ConfigurationEntity, (configuration) => configuration.location, { cascade: true }),
    tslib_1.__metadata("design:type", Array)
], LocationEntity.prototype, "configurations", void 0);
exports.LocationEntity = LocationEntity = tslib_1.__decorate([
    (0, src_1.Entity)("locations")
], LocationEntity);
//# sourceMappingURL=location.js.map