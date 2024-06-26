"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
describe("github issues > #9715 Database schema is not updated by sync/migration when 'simple-enum' is changed.", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        migrations: [__dirname + "/migration/*{.js,.ts}"],
        schemaCreate: false,
        dropSchema: true,
        enabledDrivers: ["sqlite"],
    })));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should update 'CHECK' constraint to match enum values", () => Promise.all(dataSources.map(async (dataSource) => {
        await dataSource.runMigrations();
        const sqlInMemory = await dataSource.driver
            .createSchemaBuilder()
            .log();
        sqlInMemory.upQueries
            .filter((i) => i.query.includes(`CHECK( "enumcolumn" IN ('enumvalue1','enumvalue2','enumvalue3','enumvalue4') )`))
            .length.should.be.greaterThan(0);
    })));
    // you can add additional tests if needed
});
//# sourceMappingURL=issue-9715.js.map