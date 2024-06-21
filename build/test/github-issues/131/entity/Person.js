"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const tslib_1 = require("tslib");
const Column_1 = require("../../../../src/decorator/columns/Column");
const TableInheritance_1 = require("../../../../src/decorator/entity/TableInheritance");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const PrimaryColumn_1 = require("../../../../src/decorator/columns/PrimaryColumn");
let Person = class Person {
};
exports.Person = Person;
tslib_1.__decorate([
    (0, PrimaryColumn_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Person.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "name", void 0);
exports.Person = Person = tslib_1.__decorate([
    (0, Entity_1.Entity)(),
    (0, TableInheritance_1.TableInheritance)({ column: { name: "type", type: String } })
], Person);
//# sourceMappingURL=Person.js.map