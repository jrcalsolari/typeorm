"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Content_1 = require("./Content");
let Photo = class Photo extends Content_1.Content {
};
exports.Photo = Photo;
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Photo.prototype, "size", void 0);
exports.Photo = Photo = tslib_1.__decorate([
    (0, src_1.ChildEntity)("photo")
], Photo);
//# sourceMappingURL=Photo.js.map