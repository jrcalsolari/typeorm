"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.FamilyMember = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let FamilyMember = class FamilyMember {
};
exports.FamilyMember = FamilyMember;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], FamilyMember.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        default: "PERSON",
    }),
    tslib_1.__metadata("design:type", String)
], FamilyMember.prototype, "type", void 0);
exports.FamilyMember = FamilyMember = tslib_1.__decorate([
    (0, src_1.Entity)()
], FamilyMember);
let Dog = class Dog extends FamilyMember {
};
exports.Dog = Dog;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], Dog.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        default: "PET",
    }),
    tslib_1.__metadata("design:type", String)
], Dog.prototype, "type", void 0);
exports.Dog = Dog = tslib_1.__decorate([
    (0, src_1.Entity)()
], Dog);
//# sourceMappingURL=family.js.map