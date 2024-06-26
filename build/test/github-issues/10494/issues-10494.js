"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const chai_1 = require("chai");
const test_utils_1 = require("../../utils/test-utils");
const entity_1 = require("./entity");
const schema_1 = require("./schema");
describe("github issues > #10494 Custom discriminator values when using Single Table Inheritance with Entity Schemas", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [schema_1.BaseSchema, schema_1.ASchema, schema_1.BSchema, schema_1.CSchema],
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
    it("should use custom discriminator values, when specified", () => Promise.all(dataSources.map(async (dataSource) => {
        // Arrange
        const repository = dataSource.getRepository(entity_1.Base);
        const entities = [new entity_1.A(true), new entity_1.B(42), new entity_1.C("foo")];
        await repository.save(entities);
        // Act
        const loadedEntities = await repository.find({
            order: { type: "ASC" },
        });
        // Assert
        // B doesn't specify a discriminator value, so it should
        // default to its class name
        (0, chai_1.expect)(loadedEntities[0]).to.be.instanceOf(entity_1.B);
        (0, chai_1.expect)(loadedEntities[0].type).to.be.equal("B");
        (0, chai_1.expect)(loadedEntities[1]).to.be.instanceOf(entity_1.A);
        (0, chai_1.expect)(loadedEntities[1].type).to.be.equal("custom-a");
        (0, chai_1.expect)(loadedEntities[2]).to.be.instanceOf(entity_1.C);
        (0, chai_1.expect)(loadedEntities[2].type).to.be.equal("custom-c");
    })));
});
//# sourceMappingURL=issues-10494.js.map