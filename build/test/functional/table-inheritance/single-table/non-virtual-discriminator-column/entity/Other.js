"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Other = void 0;
const tslib_1 = require("tslib");
const Column_1 = require("../../../../../../src/decorator/columns/Column");
const ChildEntity_1 = require("../../../../../../src/decorator/entity/ChildEntity");
const Person_1 = require("./Person");
let Other = class Other extends Person_1.Person {
};
exports.Other = Other;
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Other.prototype, "mood", void 0);
exports.Other = Other = tslib_1.__decorate([
    (0, ChildEntity_1.ChildEntity)("")
], Other);
//# sourceMappingURL=Other.js.map