"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const chai_1 = require("chai");
const A_1 = require("./entity/A");
const B_1 = require("./entity/B");
const C_1 = require("./entity/C");
describe("github issues > #9944 Alias Issue With Nested Entity And Relations", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: true,
        dropSchema: true,
        relationLoadStrategy: "query",
        enabledDrivers: ["mysql", "postgres"],
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("Validate correct loading of eager, nested relations", () => Promise.all(dataSources.map(async (dataSource) => {
        const aEntity = new A_1.A();
        aEntity.b = new B_1.B();
        aEntity.b.cs = [new C_1.C()];
        await dataSource.manager.save(aEntity);
        const [fetchedA] = await dataSource.manager.find(A_1.A);
        (0, chai_1.expect)(fetchedA.b).exist; // Validates correct relation A.b is loaded
        (0, chai_1.expect)(fetchedA.b.cs).exist; // Validates correct relation A.b.cs is loaded
        (0, chai_1.expect)(fetchedA.b.cs[0]).exist;
    })));
});
//# sourceMappingURL=issue-9944.js.map