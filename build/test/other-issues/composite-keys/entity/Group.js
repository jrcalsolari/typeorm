"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const PolicyGroup_1 = require("./PolicyGroup");
let Group = class Group {
};
exports.Group = Group;
tslib_1.__decorate([
    (0, src_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Group.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.OneToMany)(() => PolicyGroup_1.PolicyGroup, (policyGroup) => policyGroup.policy),
    tslib_1.__metadata("design:type", Array)
], Group.prototype, "groups", void 0);
tslib_1.__decorate([
    (0, src_1.OneToMany)(() => PolicyGroup_1.PolicyGroup, (policyGroup) => policyGroup.group),
    tslib_1.__metadata("design:type", Array)
], Group.prototype, "policies", void 0);
exports.Group = Group = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Group);
//# sourceMappingURL=Group.js.map