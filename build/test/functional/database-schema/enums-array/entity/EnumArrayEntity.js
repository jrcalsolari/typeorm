"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumArrayEntity = exports.HeterogeneousEnum = exports.StringNumericEnum = exports.StringEnum = exports.NumericEnum = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../../src");
var NumericEnum;
(function (NumericEnum) {
    NumericEnum[NumericEnum["ADMIN"] = 0] = "ADMIN";
    NumericEnum[NumericEnum["EDITOR"] = 1] = "EDITOR";
    NumericEnum[NumericEnum["MODERATOR"] = 2] = "MODERATOR";
    NumericEnum[NumericEnum["GHOST"] = 3] = "GHOST";
})(NumericEnum || (exports.NumericEnum = NumericEnum = {}));
var StringEnum;
(function (StringEnum) {
    StringEnum["ADMIN"] = "a";
    StringEnum["EDITOR"] = "e";
    StringEnum["MODERATOR"] = "m";
    StringEnum["GHOST"] = "g";
})(StringEnum || (exports.StringEnum = StringEnum = {}));
var StringNumericEnum;
(function (StringNumericEnum) {
    StringNumericEnum["ONE"] = "1";
    StringNumericEnum["TWO"] = "2";
    StringNumericEnum["THREE"] = "3";
    StringNumericEnum["FOUR"] = "4";
})(StringNumericEnum || (exports.StringNumericEnum = StringNumericEnum = {}));
var HeterogeneousEnum;
(function (HeterogeneousEnum) {
    HeterogeneousEnum[HeterogeneousEnum["NO"] = 0] = "NO";
    HeterogeneousEnum["YES"] = "YES";
})(HeterogeneousEnum || (exports.HeterogeneousEnum = HeterogeneousEnum = {}));
let EnumArrayEntity = class EnumArrayEntity {
};
exports.EnumArrayEntity = EnumArrayEntity;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], EnumArrayEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        type: "enum",
        enum: NumericEnum,
        array: true,
        default: [NumericEnum.GHOST, NumericEnum.ADMIN],
    }),
    tslib_1.__metadata("design:type", Array)
], EnumArrayEntity.prototype, "numericEnums", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        type: "enum",
        enum: StringEnum,
        array: true,
        default: [],
    }),
    tslib_1.__metadata("design:type", Array)
], EnumArrayEntity.prototype, "stringEnums", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        type: "enum",
        enum: StringNumericEnum,
        array: true,
        default: [StringNumericEnum.THREE, StringNumericEnum.ONE],
    }),
    tslib_1.__metadata("design:type", Array)
], EnumArrayEntity.prototype, "stringNumericEnums", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        type: "enum",
        enum: HeterogeneousEnum,
        array: true,
        default: [HeterogeneousEnum.YES],
    }),
    tslib_1.__metadata("design:type", Array)
], EnumArrayEntity.prototype, "heterogeneousEnums", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        type: "enum",
        enum: ["admin", "editor", "ghost"],
        array: true,
        default: ["admin"],
    }),
    tslib_1.__metadata("design:type", Array)
], EnumArrayEntity.prototype, "arrayDefinedStringEnums", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        type: "enum",
        enum: [11, 12, 13],
        array: true,
        default: [11, 13],
    }),
    tslib_1.__metadata("design:type", Array)
], EnumArrayEntity.prototype, "arrayDefinedNumericEnums", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        type: "enum",
        enum: StringEnum,
        array: true,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", Array)
], EnumArrayEntity.prototype, "enumWithoutDefault", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        type: "enum",
        enum: StringEnum,
        array: true,
        default: "{a,e}",
    }),
    tslib_1.__metadata("design:type", Array)
], EnumArrayEntity.prototype, "defaultArrayAsString", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({
        type: "enum",
        enum: StringEnum,
        array: true,
        default: "{}",
    }),
    tslib_1.__metadata("design:type", Array)
], EnumArrayEntity.prototype, "legacyDefaultAsString", void 0);
exports.EnumArrayEntity = EnumArrayEntity = tslib_1.__decorate([
    (0, src_1.Entity)()
], EnumArrayEntity);
//# sourceMappingURL=EnumArrayEntity.js.map