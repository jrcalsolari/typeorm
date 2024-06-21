"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sinon_1 = tslib_1.__importStar(require("sinon"));
const test_utils_1 = require("../../utils/test-utils");
const Book_1 = require("./entity/Book");
const User_1 = require("./entity/User");
const BorrrowedSubscriber_1 = require("./subscriber/BorrrowedSubscriber");
const chai_1 = require("chai");
describe("github issues > #9965", () => {
    let dataSources;
    before(async () => {
        dataSources = await (0, test_utils_1.createTestingConnections)({
            entities: [Book_1.Book, User_1.User],
            subscribers: [BorrrowedSubscriber_1.BorrowedSubscriber],
            enabledDrivers: ["postgres"],
            schemaCreate: true,
            dropSchema: true,
        });
    });
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should pass entityId to afterInsert method", () => Promise.all(dataSources.map(async (dataSource) => {
        const testBook = dataSource.manager.create(Book_1.Book, {
            name: "TestPost",
        });
        await dataSource.manager.save(testBook);
        const testUser = dataSource.manager.create(User_1.User, {
            name: "TestUser",
        });
        await dataSource.manager.save(testUser);
        testUser.borrowed = [testBook];
        const [subscriber] = dataSource.subscribers;
        const beforeInsert = (0, sinon_1.spy)(subscriber, "afterInsert");
        await dataSource.manager.save(testUser);
        (0, chai_1.expect)(beforeInsert.called).to.be.true;
        (0, chai_1.expect)(beforeInsert.calledWith(sinon_1.default.match((event) => {
            return (typeof event.entityId?.userId === "string" &&
                typeof event.entityId?.bookId === "string");
        }))).to.be.ok;
    })));
});
//# sourceMappingURL=issue-9965.js.map