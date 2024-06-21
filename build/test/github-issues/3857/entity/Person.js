"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let Person = class Person {
};
exports.Person = Person;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Person.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("varchar"),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "name", void 0);
exports.Person = Person = tslib_1.__decorate([
    (0, src_1.Entity)({ schema: "custom" }),
    (0, src_1.TableInheritance)({ column: { type: "varchar", name: "type" } })
], Person);
//# sourceMappingURL=Person.js.map