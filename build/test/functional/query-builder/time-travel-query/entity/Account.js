"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../../../../src/index");
let Account = class Account {
};
exports.Account = Account;
tslib_1.__decorate([
    (0, index_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Account.prototype, "id", void 0);
tslib_1.__decorate([
    (0, index_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Account.prototype, "name", void 0);
tslib_1.__decorate([
    (0, index_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Account.prototype, "balance", void 0);
exports.Account = Account = tslib_1.__decorate([
    (0, index_1.Entity)()
], Account);
//# sourceMappingURL=Account.js.map