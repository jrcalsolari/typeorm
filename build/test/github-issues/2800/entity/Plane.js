"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plane = exports.PlaneEngine = void 0;
const tslib_1 = require("tslib");
const Vehicle_1 = require("./Vehicle");
const src_1 = require("../../../../src");
class PlaneEngine extends Vehicle_1.Engine {
}
exports.PlaneEngine = PlaneEngine;
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], PlaneEngine.prototype, "beep", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], PlaneEngine.prototype, "boop", void 0);
let Plane = class Plane extends Vehicle_1.Vehicle {
};
exports.Plane = Plane;
tslib_1.__decorate([
    (0, src_1.Column)((type) => PlaneEngine, { prefix: "planeEngine" }),
    tslib_1.__metadata("design:type", PlaneEngine)
], Plane.prototype, "engine", void 0);
exports.Plane = Plane = tslib_1.__decorate([
    (0, src_1.ChildEntity)()
], Plane);
//# sourceMappingURL=Plane.js.map