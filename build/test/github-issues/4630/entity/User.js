"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Realm = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
var Realm;
(function (Realm) {
    Realm["Blackrock"] = "Blackrock";
    Realm["KelThuzad"] = "Kel'Thuzad";
})(Realm || (exports.Realm = Realm = {}));
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)({ type: "enum", enum: Realm }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "realm", void 0);
exports.User = User = tslib_1.__decorate([
    (0, src_1.Entity)()
], User);
//# sourceMappingURL=User.js.map