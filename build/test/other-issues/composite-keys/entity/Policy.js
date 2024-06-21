"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policy = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const index_1 = require("../../../../src/index");
const PolicyGroup_1 = require("./PolicyGroup");
let Policy = class Policy {
};
exports.Policy = Policy;
tslib_1.__decorate([
    (0, index_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], Policy.prototype, "id", void 0);
tslib_1.__decorate([
    (0, index_1.OneToMany)(() => PolicyGroup_1.PolicyGroup, (policyGroup) => policyGroup.policy),
    tslib_1.__metadata("design:type", Array)
], Policy.prototype, "groups", void 0);
tslib_1.__decorate([
    (0, index_1.OneToMany)(() => PolicyGroup_1.PolicyGroup, (policyGroup) => policyGroup.group),
    tslib_1.__metadata("design:type", Array)
], Policy.prototype, "policies", void 0);
exports.Policy = Policy = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], Policy);
//# sourceMappingURL=Policy.js.map