"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const src_1 = require("../../../src");
const sinon_1 = tslib_1.__importDefault(require("sinon"));
const chai_1 = require("chai");
describe("github issues > #10322 logMigration of AbstractLogger has wrong logging condition.", () => {
    let dataSources;
    const fakeLog = sinon_1.default.fake();
    class TestLogger extends src_1.AbstractLogger {
        writeLog(level, logMessage) {
            const messages = this.prepareLogMessages(logMessage, {
                highlightSql: false,
            });
            for (let message of messages) {
                switch (message.type ?? level) {
                    case "migration":
                        fakeLog(message.message);
                        break;
                }
            }
        }
    }
    before(async () => {
        dataSources = await (0, test_utils_1.createTestingConnections)({
            entities: [__dirname + "/entity/*{.js,.ts}"],
            migrations: [__dirname + "/migration/*{.js,.ts}"],
            schemaCreate: true,
            dropSchema: true,
            createLogger: () => new TestLogger(),
        });
    });
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should call fakeLog when migration failed", () => Promise.all(dataSources.map(async (dataSource) => {
        try {
            await dataSource.runMigrations();
        }
        catch (e) {
            (0, chai_1.expect)(fakeLog.called).to.be.true;
        }
    })));
});
//# sourceMappingURL=issue-10322.js.map