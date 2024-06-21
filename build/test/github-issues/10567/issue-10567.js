"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
describe("github issues > #10567 Postgres: Gist index on daterange column recreated every migration", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: false,
        dropSchema: true,
        enabledDrivers: ["postgres"],
    })));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("can recognize model changes", () => Promise.all(dataSources.map(async (dataSource) => {
        const sqlInMemory = await dataSource.driver
            .createSchemaBuilder()
            .log();
        sqlInMemory.upQueries.length.should.be.greaterThan(0);
        sqlInMemory.downQueries.length.should.be.greaterThan(0);
    })));
    it("does not generate when no model changes", () => Promise.all(dataSources.map(async (dataSource) => {
        await dataSource.driver.createSchemaBuilder().build();
        const sqlInMemory = await dataSource.driver
            .createSchemaBuilder()
            .log();
        sqlInMemory.upQueries.length.should.be.equal(0);
        sqlInMemory.downQueries.length.should.be.equal(0);
    })));
});
//# sourceMappingURL=issue-10567.js.map