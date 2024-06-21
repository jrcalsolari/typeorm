"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Weather = class Weather {
};
exports.Weather = Weather;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], Weather.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "float" }),
    tslib_1.__metadata("design:type", Number)
], Weather.prototype, "temperature", void 0);
exports.Weather = Weather = tslib_1.__decorate([
    (0, src_1.Entity)()
], Weather);
//# sourceMappingURL=weather.js.map