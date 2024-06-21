"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Address = class Address {
};
exports.Address = Address;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Address.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "jsonb" }),
    tslib_1.__metadata("design:type", Object)
], Address.prototype, "country", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "jsonb" }),
    tslib_1.__metadata("design:type", Object)
], Address.prototype, "city", void 0);
exports.Address = Address = tslib_1.__decorate([
    (0, src_1.Entity)()
], Address);
//# sourceMappingURL=Address.js.map