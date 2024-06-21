"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const weather_1 = require("./entity/weather");
const chai_1 = require("chai");
describe("github issues > #7308 queryBuilder makes different parameter identifiers for same parameter, causing problems with groupby", () => {
    describe("Postgres & cockroachdb", () => {
        let dataSources;
        before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
            entities: [weather_1.Weather],
            enabledDrivers: [
                "postgres",
                "cockroachdb",
                "spanner",
                "mssql",
                "oracle",
            ],
            schemaCreate: true,
            dropSchema: true,
        })));
        beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
        after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
        it("should not create different parameters identifiers for the same parameter", () => Promise.all(dataSources.map(async (dataSource) => {
            const [query, parameters] = dataSource
                .getRepository(weather_1.Weather)
                .createQueryBuilder()
                .select("round(temperature, :floatNumber)")
                .addSelect("count(*)", "count")
                .groupBy("round(temperature, :floatNumber)")
                .setParameters({ floatNumber: 2.4 })
                .getQueryAndParameters();
            query.should.not.be.undefined;
            if (dataSource.driver.options.type === "postgres" ||
                dataSource.driver.options.type === "cockroachdb") {
                (0, chai_1.expect)(query).to.equal('SELECT round(temperature, $1), count(*) AS "count" FROM "weather" "Weather" GROUP BY round(temperature, $1)');
            }
            else if (dataSource.driver.options.type === "spanner") {
                (0, chai_1.expect)(query).to.equal('SELECT round(temperature, @param0), count(*) AS "count" FROM "weather" "Weather" GROUP BY round(temperature, @param0)');
            }
            else if (dataSource.driver.options.type === "oracle") {
                (0, chai_1.expect)(query).to.equal('SELECT round(temperature, :1), count(*) AS "count" FROM "weather" "Weather" GROUP BY round(temperature, :1)');
            }
            else if (dataSource.driver.options.type === "mssql") {
                (0, chai_1.expect)(query).to.equal('SELECT round(temperature, @0), count(*) AS "count" FROM "weather" "Weather" GROUP BY round(temperature, @0)');
            }
            return parameters.length.should.eql(1);
        })));
    });
});
//# sourceMappingURL=issue-7308.js.map