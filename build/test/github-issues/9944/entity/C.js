"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const A_1 = require("./A");
const D_1 = require("./D");
let C = class C {
};
exports.C = C;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("increment"),
    tslib_1.__metadata("design:type", Number)
], C.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToOne)(() => A_1.A, (a) => a.b.cs, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        nullable: false,
    }),
    tslib_1.__metadata("design:type", A_1.A)
], C.prototype, "a", void 0);
tslib_1.__decorate([
    (0, src_1.OneToMany)(() => D_1.D, (d) => d.c, {
        cascade: true,
        orphanedRowAction: "delete",
        eager: true,
    }),
    tslib_1.__metadata("design:type", Array)
], C.prototype, "ds", void 0);
exports.C = C = tslib_1.__decorate([
    (0, src_1.Entity)()
], C);
//# sourceMappingURL=C.js.map