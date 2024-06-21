"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const Example_1 = require("./entity/Example");
describe("github issues > #10191 incorrect escaping of indexPredicate", () => {
    let connections;
    before(async () => (connections = await (0, test_utils_1.createTestingConnections)({
        entities: [Example_1.Example],
        enabledDrivers: ["postgres"],
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    after(() => (0, test_utils_1.closeTestingConnections)(connections));
    it("should not fail", () => Promise.all(connections.map(async (connection) => {
        await connection.manager.upsert(Example_1.Example, {
            nonNullable: "nonNullable",
            nullable: "nullable",
            value: "value",
        }, {
            conflictPaths: {
                nonNullable: true,
                nullable: true,
            },
            skipUpdateIfNoValuesChanged: true,
            indexPredicate: '"nullable" IS NOT NULL',
        });
    })));
});
//# sourceMappingURL=index-10191.js.map