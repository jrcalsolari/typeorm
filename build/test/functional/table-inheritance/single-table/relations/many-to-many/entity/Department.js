"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const tslib_1 = require("tslib");
const Column_1 = require("../../../../../../../src/decorator/columns/Column");
const Entity_1 = require("../../../../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../../../../src/decorator/columns/PrimaryGeneratedColumn");
const ManyToMany_1 = require("../../../../../../../src/decorator/relations/ManyToMany");
const Accountant_1 = require("./Accountant");
let Department = class Department {
};
exports.Department = Department;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Department.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "name", void 0);
tslib_1.__decorate([
    (0, ManyToMany_1.ManyToMany)((type) => Accountant_1.Accountant, (accountant) => accountant.departments),
    tslib_1.__metadata("design:type", Array)
], Department.prototype, "accountants", void 0);
exports.Department = Department = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Department);
//# sourceMappingURL=Department.js.map