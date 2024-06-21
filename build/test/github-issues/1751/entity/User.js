"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let User = class User {
    constructor() {
        this.id = undefined;
        this.email = "";
        this.avatarURL = "";
    }
};
exports.User = User;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("varchar"),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("varchar"),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "avatarURL", void 0);
exports.User = User = tslib_1.__decorate([
    (0, src_1.Entity)()
], User);
//# sourceMappingURL=User.js.map