"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Party = class Party {
};
exports.Party = Party;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], Party.prototype, "id", void 0);
exports.Party = Party = tslib_1.__decorate([
    (0, src_1.Entity)()
], Party);
//# sourceMappingURL=Party.js.map