"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../utils/test-setup");
const test_utils_1 = require("../../../utils/test-utils");
const chai_1 = require("chai");
const User_1 = require("./entity/User");
describe("query builder > isolated-where", () => {
    let connections;
    before(async () => (connections = await (0, test_utils_1.createTestingConnections)({
        entities: [User_1.User],
        enabledDrivers: ["sqlite"],
        isolateWhereStatements: true,
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    after(() => (0, test_utils_1.closeTestingConnections)(connections));
    it("should correctly apply brackets when where statement isolation is enabled", () => Promise.all(connections.map(async (connection) => {
        const sql = connection.manager
            .createQueryBuilder(User_1.User, "user")
            .where("user.id = :userId", { userId: "user-id" })
            .andWhere("user.firstName = :search OR user.lastName = :search", {
            search: "search-term",
        })
            .disableEscaping()
            .getSql();
        (0, chai_1.expect)(sql).to.be.equal("SELECT user.id AS user_id, user.firstName AS user_firstName, " +
            "user.lastName AS user_lastName, user.isAdmin AS user_isAdmin " +
            "FROM user user " +
            "WHERE user.id = ? " +
            "AND (user.firstName = ? OR user.lastName = ?)");
    })));
});
//# sourceMappingURL=query-builder-isolated-where.js.map