"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const chai_1 = require("chai");
const test_utils_1 = require("../../utils/test-utils");
const entity_1 = require("./entity");
describe("github issues > #10496 User-defined index name for Single Table Inheritance discriminator columns", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [entity_1.Base, entity_1.A, entity_1.B, entity_1.C],
        schemaCreate: true,
        dropSchema: true,
        enabledDrivers: [
            "better-sqlite3",
            "cockroachdb",
            "mariadb",
            "mssql",
            "mysql",
            "oracle",
            "postgres",
            "spanner",
            "sqlite",
        ],
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should create a single index for the discriminator column, with the specified column name", () => Promise.all(dataSources.map(async (dataSource) => {
        const queryRunner = dataSource.createQueryRunner();
        await queryRunner.connect();
        const table = (await queryRunner.getTable("base"));
        await queryRunner.release();
        const discriminatorColumnIndices = table.indices.filter((index) => index.columnNames.length === 1 &&
            index.columnNames[0] === "type");
        (0, chai_1.expect)(discriminatorColumnIndices).to.have.length(1);
        (0, chai_1.expect)(discriminatorColumnIndices[0].name).to.be.equal("IX_Base_type");
    })));
});
//# sourceMappingURL=issue-10496.js.map