"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const chai_1 = require("chai");
const test_utils_1 = require("../../utils/test-utils");
const Example_1 = require("./entity/Example");
describe("github issues > #7932  non-ascii characters assigned to var/char columns in SQL are truncated to one byte", () => {
    let connections;
    before(async () => {
        connections = await (0, test_utils_1.createTestingConnections)({
            entities: [Example_1.Example],
            enabledDrivers: ["mssql"],
            schemaCreate: false,
            dropSchema: true,
        });
    });
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    after(() => (0, test_utils_1.closeTestingConnections)(connections));
    it("should store non-ascii characters in var/char without data loss", () => Promise.all(connections.map(async (connection) => {
        const repo = connection.getRepository(Example_1.Example);
        const entity = new Example_1.Example();
        entity.content = "\u2021";
        entity.fixedLengthContent = "\u2022";
        await repo.save(entity);
        const [savedEntity] = await repo.find({
            order: { created: "DESC" },
        });
        (0, chai_1.expect)(savedEntity?.content).to.be.equal(entity.content);
        (0, chai_1.expect)(savedEntity?.fixedLengthContent).to.be.equal("\u2022         ");
    })));
    // TODO: we need to fix this test, it was incorrectly awaited from the beginning
    it.skip("should throw an error if characters in a string are too long to store", () => Promise.all(connections.map(async (connection) => {
        const repo = connection.getRepository(Example_1.Example);
        const entity = new Example_1.Example();
        entity.content = "💖";
        entity.fixedLengthContent = "🏍";
        await (0, chai_1.expect)(repo.save(entity)).to.eventually.be.rejectedWith(Error);
    })));
    it("should not change char or varchar column types to nchar or nvarchar", () => Promise.all(connections.map(async (connection) => {
        const repo = connection.getRepository(Example_1.Example);
        const columnMetadata = repo.metadata.ownColumns;
        const contentColumnType = columnMetadata.find((m) => m.propertyName === "content")?.type;
        const fixedLengthContentColumnType = columnMetadata.find((m) => m.propertyName === "fixedLengthContent")?.type;
        (0, chai_1.expect)(contentColumnType).to.be.equal("varchar");
        (0, chai_1.expect)(fixedLengthContentColumnType).to.be.equal("char");
    })));
});
//# sourceMappingURL=issue-7932.js.map