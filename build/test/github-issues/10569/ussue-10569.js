"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const chai_1 = require("chai");
const uuid_1 = require("uuid");
const test_utils_1 = require("../../utils/test-utils");
const user_1 = require("./entity/user");
describe("github issues > #10569 Fix type inferencing of EntityManager#create", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: true,
        dropSchema: true,
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should correctly inference entity type", () => Promise.all(dataSources.map(async (dataSource) => {
        const createUserContract = {
            name: "John Doe",
        };
        const user = dataSource.manager.create(user_1.User, createUserContract);
        user.id = (0, uuid_1.v4)();
        (0, chai_1.expect)(user.id).to.exist;
    })));
});
//# sourceMappingURL=ussue-10569.js.map