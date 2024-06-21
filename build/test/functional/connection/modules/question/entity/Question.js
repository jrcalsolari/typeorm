"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../../../src/decorator/entity/Entity");
const PrimaryGeneratedColumn_1 = require("../../../../../../src/decorator/columns/PrimaryGeneratedColumn");
const Column_1 = require("../../../../../../src/decorator/columns/Column");
let Question = class Question {
};
exports.Question = Question;
tslib_1.__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Question.prototype, "id", void 0);
tslib_1.__decorate([
    (0, Column_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Question.prototype, "name", void 0);
exports.Question = Question = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Question);
//# sourceMappingURL=Question.js.map