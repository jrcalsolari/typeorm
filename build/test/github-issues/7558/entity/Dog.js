"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogEntity = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Animal_1 = require("./Animal");
let DogEntity = class DogEntity extends Animal_1.AnimalEntity {
};
exports.DogEntity = DogEntity;
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], DogEntity.prototype, "steaksEaten", void 0);
exports.DogEntity = DogEntity = tslib_1.__decorate([
    (0, src_1.ChildEntity)("dog")
], DogEntity);
//# sourceMappingURL=Dog.js.map