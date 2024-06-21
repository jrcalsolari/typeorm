"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const chai_1 = require("chai");
const example_1 = require("./entity/example");
describe("github issues > #10249 Saving an entity is not possible if only columns with update: false are changed", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [example_1.Example],
        enabledDrivers: ["postgres"],
        schemaCreate: true,
        dropSchema: true,
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should ignore changes for columns with `update: false` on saving entity", () => Promise.all(dataSources.map(async (dataSource) => {
        await Promise.all(dataSources.map(async (dataSource) => {
            const manager = dataSource.manager;
            // create entity
            let exampleEntity = new example_1.Example();
            exampleEntity.id = "1";
            exampleEntity.notUpdatable = "value1";
            exampleEntity.updatable = "value1";
            await manager.save(exampleEntity);
            // updates only updatable value
            exampleEntity.notUpdatable = "value2";
            exampleEntity.updatable = "value2";
            await manager.save(exampleEntity);
            exampleEntity = (await manager.findOneBy(example_1.Example, {
                id: "1",
            }));
            (0, chai_1.expect)(exampleEntity.notUpdatable).to.be.eql("value1");
            (0, chai_1.expect)(exampleEntity.updatable).to.be.eql("value2");
            // if `update: false` column only specified, do nothing
            exampleEntity.notUpdatable = "value3";
            await manager.save(exampleEntity);
            exampleEntity = (await manager.findOneBy(example_1.Example, {
                id: "1",
            }));
            (0, chai_1.expect)(exampleEntity.notUpdatable).to.be.eql("value1");
            (0, chai_1.expect)(exampleEntity.updatable).to.be.eql("value2");
        }));
    })));
});
//# sourceMappingURL=issue-10249.js.map