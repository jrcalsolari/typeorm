"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCreate = void 0;
const tslib_1 = require("tslib");
const Column_1 = require("../../../../src/decorator/columns/Column");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const src_1 = require("../../../../src");
let TestCreate = class TestCreate {
    constructor() {
        this.hasCalledConstructor = false;
        this.foo = "bar";
        this.hasCalledConstructor = true;
    }
};
exports.TestCreate = TestCreate;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], TestCreate.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], TestCreate.prototype, "foo", void 0);
exports.TestCreate = TestCreate = tslib_1.__decorate([
    (0, Entity_1.Entity)(),
    tslib_1.__metadata("design:paramtypes", [])
], TestCreate);
//# sourceMappingURL=TestCreate.js.map