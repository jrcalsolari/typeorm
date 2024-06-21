"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const AccessToken_1 = require("./AccessToken");
const JoinColumn_1 = require("../../../../src/decorator/relations/JoinColumn");
const OneToOne_1 = require("../../../../src/decorator/relations/OneToOne");
const Column_1 = require("../../../../src/decorator/columns/Column");
const PrimaryColumn_1 = require("../../../../src/decorator/columns/PrimaryColumn");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const Generated_1 = require("../../../../src/decorator/Generated");
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, PrimaryColumn_1.PrimaryColumn)("int"),
    (0, Generated_1.Generated)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, OneToOne_1.OneToOne)((type) => AccessToken_1.AccessToken),
    (0, JoinColumn_1.JoinColumn)(),
    tslib_1.__metadata("design:type", AccessToken_1.AccessToken)
], User.prototype, "access_token", void 0);
exports.User = User = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], User);
//# sourceMappingURL=User.js.map