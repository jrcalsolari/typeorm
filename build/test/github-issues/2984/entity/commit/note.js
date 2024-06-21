"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../../src");
let Note = class Note {
};
exports.Note = Note;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Note.prototype, "id", void 0);
exports.Note = Note = tslib_1.__decorate([
    (0, src_1.Entity)({ name: "commitNote" })
], Note);
//# sourceMappingURL=note.js.map