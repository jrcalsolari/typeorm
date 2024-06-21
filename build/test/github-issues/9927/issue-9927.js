"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = require("../../utils/test-utils");
const ExampleEntity_1 = require("./entity/ExampleEntity");
describe("github issues > #9927 aggregate function throw error when column alias name is set", () => {
    let dataSources;
    before(async () => {
        dataSources = await (0, test_utils_1.createTestingConnections)({
            entities: [ExampleEntity_1.ExampleEntity],
            enabledDrivers: ["mariadb"],
        });
    });
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should call `maximum` method successfully", async () => {
        await Promise.all(dataSources.map(async (dataSource) => {
            await dataSource.manager.maximum(ExampleEntity_1.ExampleEntity, "serialNoId", {});
        }));
    });
    it("should call `minimum` method successfully", async () => {
        await Promise.all(dataSources.map(async (dataSource) => {
            await dataSource.manager.minimum(ExampleEntity_1.ExampleEntity, "serialNoId", {});
        }));
    });
    it("should call `sum` method successfully", async () => {
        await Promise.all(dataSources.map(async (dataSource) => {
            await dataSource.manager.sum(ExampleEntity_1.ExampleEntity, "serialNoId", {});
        }));
    });
    it("should call `average` method successfully", async () => {
        await Promise.all(dataSources.map(async (dataSource) => {
            await dataSource.manager.average(ExampleEntity_1.ExampleEntity, "serialNoId", {});
        }));
    });
});
//# sourceMappingURL=issue-9927.js.map