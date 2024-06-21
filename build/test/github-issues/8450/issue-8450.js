"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const UserEntity_1 = require("./entity/UserEntity");
const chai_1 = require("chai");
describe("github issues > #8450 Generated column not in RETURNING clause on save", () => {
    let connections;
    before(async () => (connections = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        enabledDrivers: ["postgres", "mysql"],
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    after(() => (0, test_utils_1.closeTestingConnections)(connections));
    it("should populate an object with generated column values after saving", () => Promise.all(connections.map(async (connection) => {
        const user = new UserEntity_1.UserEntity();
        user.id = 100;
        (0, chai_1.expect)(user.generated).to.be.undefined;
        await connection.manager.save(user);
        (0, chai_1.expect)(user.generated).to.be.a("number");
        (0, chai_1.expect)(user.generated).to.be.equal(user.id * 2);
    })));
});
//# sourceMappingURL=issue-8450.js.map