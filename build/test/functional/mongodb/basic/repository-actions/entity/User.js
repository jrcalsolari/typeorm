"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const Column_1 = require("../../../../../../src/decorator/columns/Column");
const Entity_1 = require("../../../../../../src/decorator/entity/Entity");
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
exports.User = User = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], User);
//# sourceMappingURL=User.js.map