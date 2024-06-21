"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
describe("github issues > #10043 Numeric array column type creates migration repeatedly", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        migrations: [__dirname + "/migration/*{.js,.ts}"],
        schemaCreate: false,
        dropSchema: true,
        enabledDrivers: ["postgres"],
    })));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should not generate migration for synchronized sized-numeric array column", () => Promise.all(dataSources.map(async (dataSource) => {
        await dataSource.runMigrations();
        const sqlInMemory = await dataSource.driver
            .createSchemaBuilder()
            .log();
        sqlInMemory.upQueries.length.should.equal(0);
        sqlInMemory.downQueries.length.should.equal(0);
    })));
});
//# sourceMappingURL=issue-10043.js.map