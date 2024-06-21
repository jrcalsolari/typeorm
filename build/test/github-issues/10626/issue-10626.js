"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const chai_1 = require("chai");
describe("github issues > #10626 Postgres CREATE INDEX CONCURRENTLY bug", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: false,
        dropSchema: true,
        enabledDrivers: ["postgres"],
        logging: true,
    })));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("has to create INDEX CONCURRENTLY", () => Promise.all(dataSources.map(async (dataSource) => {
        await dataSource.setOptions({
            ...dataSource.options,
            migrationsTransactionMode: "none",
        });
        await dataSource.synchronize();
        const concurrentTestIndexes = await dataSource.query(`SELECT * FROM pg_indexes WHERE indexname = 'concurrentTest'`);
        (0, chai_1.expect)(concurrentTestIndexes).has.length(1);
    })));
    it("has to drop INDEX CONCURRENTLY", () => Promise.all(dataSources.map(async (dataSource) => {
        await dataSource.setOptions({
            ...dataSource.options,
            migrationsTransactionMode: "none",
        });
        await dataSource.synchronize();
        const queryRunner = dataSource.createQueryRunner();
        let table = await queryRunner.getTable("user");
        if (table) {
            await queryRunner.dropIndex(table, table?.indices[0]);
        }
        const queries = queryRunner.getMemorySql().upQueries;
        (0, chai_1.expect)(queries[0].query).to.be.eql('DROP INDEX "public"."concurrentTest"');
        await queryRunner.release();
    })));
});
//# sourceMappingURL=issue-10626.js.map