"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const chai_1 = require("chai");
const test_utils_1 = require("../../utils/test-utils");
const User_1 = require("./entity/User");
describe("github issues > #9910 Incorrect behaivor of 'alwaysEnabled: true' after change from issue #9023", () => {
    let connections;
    before(async () => (connections = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        cache: {
            alwaysEnabled: true,
        },
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    after(() => (0, test_utils_1.closeTestingConnections)(connections));
    it("should automatically cache if alwaysEnabled", () => Promise.all(connections.map(async (connection) => {
        if (connection.driver.options.type === "spanner") {
            return;
        }
        const user1 = new User_1.User();
        user1.name = "Foo";
        await connection.manager.save(user1);
        const users1 = await connection
            .createQueryBuilder(User_1.User, "user")
            .getMany();
        (0, chai_1.expect)(users1.length).to.be.equal(1);
        const user2 = new User_1.User();
        user2.name = "Bar";
        await connection.manager.save(user2);
        // result should be cached and second user should not be retrieved
        const users2 = await connection
            .createQueryBuilder(User_1.User, "user")
            .getMany();
        (0, chai_1.expect)(users2.length).to.be.equal(1);
        // with cache explicitly disabled, the second user should be retrieved
        const users3 = await connection
            .createQueryBuilder(User_1.User, "user")
            .cache(false)
            .getMany();
        (0, chai_1.expect)(users3.length).to.be.equal(2);
    })));
});
//# sourceMappingURL=issue-9910.js.map