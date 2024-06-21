"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const chai_1 = require("chai");
const test_utils_1 = require("../../../utils/test-utils");
const foo_1 = require("./entity/foo");
const helpers_1 = require("./helpers");
describe("query builder > cte > simple", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: true,
        dropSchema: true,
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("show allow select from CTE", () => Promise.all(dataSources
        .filter((0, helpers_1.filterByCteCapabilities)("enabled"))
        .map(async (dataSource) => {
        await dataSource
            .getRepository(foo_1.Foo)
            .insert([1, 2, 3].map((i) => ({ id: i, bar: String(i) })));
        let cteSelection = dataSource.driver.options.type === "oracle"
            ? `"foo"."bar"`
            : `foo.bar`;
        const cteQuery = dataSource
            .createQueryBuilder()
            .select()
            .addSelect(cteSelection, "bar")
            .from(foo_1.Foo, "foo")
            .where(`${cteSelection} = :value`, { value: "2" });
        // Spanner does not support column names in CTE
        const cteOptions = dataSource.driver.options.type === "spanner"
            ? undefined
            : {
                columnNames: ["raz"],
            };
        cteSelection =
            dataSource.driver.options.type === "spanner"
                ? "qaz.bar"
                : dataSource.driver.options.type === "oracle"
                    ? `"qaz"."raz"`
                    : "qaz.raz";
        const qb = dataSource
            .createQueryBuilder()
            .addCommonTableExpression(cteQuery, "qaz", cteOptions)
            .from("qaz", "qaz")
            .select([])
            .addSelect(cteSelection, "raz");
        (0, chai_1.expect)(await qb.getRawMany()).to.deep.equal([{ raz: "2" }]);
    })));
    it("should allow join with CTE", () => Promise.all(dataSources
        .filter((0, helpers_1.filterByCteCapabilities)("enabled"))
        .map(async (dataSource) => {
        await dataSource
            .getRepository(foo_1.Foo)
            .insert([1, 2, 3].map((i) => ({ id: i, bar: String(i) })));
        let cteSelection = dataSource.driver.options.type === "oracle"
            ? `"foo"."bar"`
            : `foo.bar`;
        const cteQuery = dataSource
            .createQueryBuilder()
            .select()
            .addSelect(dataSource.driver.options.type === "oracle"
            ? `"bar"`
            : "bar", "bar")
            .from(foo_1.Foo, "foo")
            .where(`${cteSelection} = '2'`);
        // Spanner does not support column names in CTE
        const cteOptions = dataSource.driver.options.type === "spanner"
            ? undefined
            : {
                columnNames: ["raz"],
            };
        cteSelection =
            dataSource.driver.options.type === "spanner"
                ? "qaz.bar"
                : dataSource.driver.options.type === "oracle"
                    ? `"qaz"."raz"`
                    : "qaz.raz";
        const results = await dataSource
            .createQueryBuilder(foo_1.Foo, "foo")
            .addCommonTableExpression(cteQuery, "qaz", cteOptions)
            .innerJoin("qaz", "qaz", `${cteSelection} = ${dataSource.driver.options.type === "oracle"
            ? `"foo"."bar"`
            : `foo.bar`}`)
            .getMany();
        (0, chai_1.expect)(results).to.have.length(1);
        (0, chai_1.expect)(results[0]).to.include({
            bar: "2",
        });
    })));
    it("should allow to use INSERT with RETURNING clause in CTE", () => Promise.all(dataSources
        .filter((0, helpers_1.filterByCteCapabilities)("writable"))
        .map(async (connection) => {
        const bar = Math.random().toString();
        const cteQuery = connection
            .createQueryBuilder()
            .insert()
            .into(foo_1.Foo)
            .values({
            id: 7,
            bar,
        })
            .returning(["id", "bar"]);
        const results = await connection
            .createQueryBuilder()
            .select()
            .addCommonTableExpression(cteQuery, "insert_result")
            .from("insert_result", "insert_result")
            .getRawMany();
        (0, chai_1.expect)(results).to.have.length(1);
        (0, chai_1.expect)(results[0]).to.include({
            bar,
        });
    })));
    it("should allow string for CTE", () => Promise.all(dataSources
        .filter((0, helpers_1.filterByCteCapabilities)("enabled"))
        .map(async (dataSource) => {
        // Spanner does not support column names in CTE
        let results;
        if (dataSource.driver.options.type === "spanner") {
            results = await dataSource
                .createQueryBuilder()
                .select()
                .addCommonTableExpression(`
                                SELECT 1 AS foo
                                UNION ALL
                                SELECT 2 AS foo
                                `, "cte")
                .from("cte", "cte")
                .addSelect("foo", "row")
                .getRawMany();
        }
        else if (dataSource.driver.options.type === "oracle") {
            results = await dataSource
                .createQueryBuilder()
                .select()
                .addCommonTableExpression(`
                                SELECT 1 FROM DUAL
                                UNION
                                SELECT 2 FROM DUAL
                                `, "cte", { columnNames: ["foo"] })
                .from("cte", "cte")
                .addSelect(`"foo"`, "row")
                .getRawMany();
        }
        else {
            results = await dataSource
                .createQueryBuilder()
                .select()
                .addCommonTableExpression(`
                                SELECT 1
                                UNION
                                SELECT 2
                                `, "cte", { columnNames: ["foo"] })
                .from("cte", "cte")
                .addSelect("foo", "row")
                .getRawMany();
        }
        const [rowWithOne, rowWithTwo] = results;
        (0, chai_1.expect)(String(rowWithOne.row)).to.equal("1");
        (0, chai_1.expect)(String(rowWithTwo.row)).to.equal("2");
    })));
});
//# sourceMappingURL=simple-cte.js.map