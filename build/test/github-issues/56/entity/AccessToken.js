"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessToken = void 0;
const tslib_1 = require("tslib");
const PrimaryColumn_1 = require("../../../../src/decorator/columns/PrimaryColumn");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
let AccessToken = class AccessToken {
};
exports.AccessToken = AccessToken;
tslib_1.__decorate([
    (0, PrimaryColumn_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "access_token", void 0);
exports.AccessToken = AccessToken = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], AccessToken);
//# sourceMappingURL=AccessToken.js.map