"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const Policy_1 = require("./entity/Policy");
const Group_1 = require("./entity/Group");
const PolicyGroup_1 = require("./entity/PolicyGroup");
describe("other issues > composite keys doesn't work as expected in 0.3 compared to 0.2", () => {
    let connections;
    before(async () => (connections = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    after(() => (0, test_utils_1.closeTestingConnections)(connections));
    it("should properly save new relation items", () => Promise.all(connections.map(async function (connection) {
        const group1 = new Group_1.Group();
        group1.id = 1;
        const group2 = new Group_1.Group();
        group2.id = 2;
        const policy1 = new Policy_1.Policy();
        policy1.id = 1;
        const policy2 = new Policy_1.Policy();
        policy2.id = 2;
        await connection.manager.save([
            group1,
            group2,
            policy1,
            policy2,
        ]);
        const policyGroup1 = new PolicyGroup_1.PolicyGroup();
        policyGroup1.groupId = group1.id;
        policyGroup1.policyId = policy1.id;
        await connection.manager.save([policyGroup1]);
        // re-load policy
        const loadedPolicy = await connection.manager
            .getRepository(Policy_1.Policy)
            .findOneOrFail({
            where: { id: 1 },
            loadEagerRelations: false,
        });
        const loadedPolicyGroups = await connection.manager
            .getRepository(PolicyGroup_1.PolicyGroup)
            .find({
            where: {
                policyId: loadedPolicy.id,
            },
            loadEagerRelations: false,
        });
        const policyGroups2 = new PolicyGroup_1.PolicyGroup();
        policyGroups2.groupId = group2.id;
        policyGroups2.policyId = policy1.id;
        loadedPolicy.groups = [...loadedPolicyGroups, policyGroups2];
        await connection.manager.save(loadedPolicy);
    })));
    it("should properly save new relation items - Drata", async () => {
        for (const connection of connections) {
            let policy = new Policy_1.Policy();
            policy.id = 1;
            const group = new Group_1.Group();
            group.id = 1;
            let policyGroup = new PolicyGroup_1.PolicyGroup();
            policyGroup.policy = policy;
            policyGroup.group = group;
            await connection.manager.save(policy);
            await connection.manager.save(group);
            await connection.manager.save(policyGroup);
            /**
             * Query everything back out to start fresh
             */
            policy = await connection.manager.findOneByOrFail(Policy_1.Policy, {});
            policyGroup = await connection.manager.findOneByOrFail(PolicyGroup_1.PolicyGroup, {});
            policy.groups = [policyGroup];
            /**
             * This save fails
             */
            await connection.manager.save(policy);
        }
    });
});
//# sourceMappingURL=composite-keys.js.map