"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const chai_1 = require("chai");
const User_1 = require("./entity/User");
describe("github issues > #10493 Broken migrations for indices on TIMESTAMP WITH TIMEZONE Oracle Database columns", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [User_1.User],
        enabledDrivers: ["oracle"],
        schemaCreate: true,
        dropSchema: true,
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should ignore virtual columns when indexing Oracle TIMESTAMP WITH TIME ZONE columns", () => Promise.all(dataSources.map(async (dataSource) => {
        // Prior to this fix, TypeORM would attempt to drop the virtual
        // column and recreate the index.
        //
        // Usually, this would fail because it should not have any info
        // about the virtual column on the "typeorm_metadata" table.
        //
        // But even after creating the metadata table manually, it
        // would still fail because Oracle does not allow dropping
        // virtual columns that were automatically generated.
        const sqlInMemory = await dataSource.driver
            .createSchemaBuilder()
            .log();
        (0, chai_1.expect)(sqlInMemory.upQueries).to.have.length(0);
        (0, chai_1.expect)(sqlInMemory.downQueries).to.have.length(0);
    })));
});
//# sourceMappingURL=issue-10493.js.map