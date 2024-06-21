"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyGroup = void 0;
const tslib_1 = require("tslib");
const Entity_1 = require("../../../../src/decorator/entity/Entity");
const index_1 = require("../../../../src/index");
const Policy_1 = require("./Policy");
const Group_1 = require("./Group");
let PolicyGroup = class PolicyGroup {
};
exports.PolicyGroup = PolicyGroup;
tslib_1.__decorate([
    (0, index_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], PolicyGroup.prototype, "policyId", void 0);
tslib_1.__decorate([
    (0, index_1.ManyToOne)(() => Policy_1.Policy, (policy) => policy.id, {
        eager: true,
        nullable: false,
    }),
    (0, index_1.JoinColumn)(),
    tslib_1.__metadata("design:type", Policy_1.Policy)
], PolicyGroup.prototype, "policy", void 0);
tslib_1.__decorate([
    (0, index_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", Number)
], PolicyGroup.prototype, "groupId", void 0);
tslib_1.__decorate([
    (0, index_1.ManyToOne)(() => Group_1.Group, (group) => group.id, {
        eager: true,
        nullable: false,
    }),
    tslib_1.__metadata("design:type", Group_1.Group)
], PolicyGroup.prototype, "group", void 0);
exports.PolicyGroup = PolicyGroup = tslib_1.__decorate([
    (0, Entity_1.Entity)()
], PolicyGroup);
//# sourceMappingURL=PolicyGroup.js.map