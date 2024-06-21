"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = require("../../utils/test-utils");
const ExampleEntity_1 = require("./entity/ExampleEntity");
const chai_1 = require("chai");
describe("github issues > #10612", () => {
    let dataSources;
    before(async () => {
        dataSources = await (0, test_utils_1.createTestingConnections)({
            entities: [ExampleEntity_1.ExampleEntity],
            enabledDrivers: ["postgres"],
        });
    });
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("add table comment", async () => {
        await Promise.all(dataSources.map(async (dataSource) => {
            const sql = "SELECT obj_description('example'::regclass::oid, 'pg_class') AS table_comment";
            const result = await dataSource.manager.query(sql);
            (0, chai_1.expect)(result).to.be.eql([{ table_comment: "table comment" }]);
        }));
    });
    it("should correctly change table comment and change", async () => {
        await Promise.all(dataSources.map(async (dataSource) => {
            const queryRunner = dataSource.createQueryRunner();
            const table = await queryRunner.getTable("example");
            await queryRunner.changeTableComment(table, "new table comment");
            const sql = "SELECT obj_description('example'::regclass::oid, 'pg_class') AS table_comment";
            let result = await dataSource.manager.query(sql);
            (0, chai_1.expect)(result).to.be.eql([
                { table_comment: "new table comment" },
            ]);
            // revert changes
            await queryRunner.executeMemoryDownSql();
            result = await dataSource.manager.query(sql);
            (0, chai_1.expect)(result).to.be.eql([{ table_comment: "table comment" }]);
            await queryRunner.release();
        }));
    });
    it("should correctly synchronize when table comment change", async () => {
        await Promise.all(dataSources.map(async (dataSource) => {
            const queryRunner = dataSource.createQueryRunner();
            const exampleMetadata = dataSource.getMetadata(ExampleEntity_1.ExampleEntity);
            exampleMetadata.comment = "change table comment";
            await dataSource.synchronize();
            const sql = "SELECT obj_description('example'::regclass::oid, 'pg_class') AS table_comment";
            const result = await dataSource.manager.query(sql);
            (0, chai_1.expect)(result).to.be.eql([
                { table_comment: "change table comment" },
            ]);
            await queryRunner.release();
        }));
    });
});
//# sourceMappingURL=issue-10612.js.map