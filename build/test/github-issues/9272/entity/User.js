"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Address = exports.LatLong = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
class LatLong {
}
exports.LatLong = LatLong;
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], LatLong.prototype, "latitude", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], LatLong.prototype, "longitude", void 0);
class Address {
}
exports.Address = Address;
tslib_1.__decorate([
    (0, src_1.Column)(() => LatLong),
    tslib_1.__metadata("design:type", LatLong)
], Address.prototype, "latLong", void 0);
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(() => Address),
    tslib_1.__metadata("design:type", Address)
], User.prototype, "address", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "age", void 0);
exports.User = User = tslib_1.__decorate([
    (0, src_1.Entity)()
], User);
//# sourceMappingURL=User.js.map