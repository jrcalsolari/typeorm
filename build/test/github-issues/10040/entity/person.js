"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const todo_1 = require("./todo");
let Person = class Person {
};
exports.Person = Person;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("varchar"),
    tslib_1.__metadata("design:type", String)
], Person.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.OneToMany)(() => todo_1.Todo, (o) => o.owner),
    tslib_1.__metadata("design:type", Array)
], Person.prototype, "todos", void 0);
exports.Person = Person = tslib_1.__decorate([
    (0, src_1.Entity)({ name: "person" })
], Person);
//# sourceMappingURL=person.js.map