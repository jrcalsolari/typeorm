"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const tslib_1 = require("tslib");
const TypeOrm = tslib_1.__importStar(require("../../../../../../src"));
const Person_1 = require("./Person");
let Employee = class Employee extends Person_1.Person {
};
exports.Employee = Employee;
tslib_1.__decorate([
    TypeOrm.Column({ default: null }),
    tslib_1.__metadata("design:type", String)
], Employee.prototype, "employeeName", void 0);
exports.Employee = Employee = tslib_1.__decorate([
    TypeOrm.Entity({ name: "person" })
], Employee);
//# sourceMappingURL=Employee.js.map