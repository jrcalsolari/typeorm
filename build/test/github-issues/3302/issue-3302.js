"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const app_root_path_1 = tslib_1.__importDefault(require("app-root-path"));
const sinon_1 = tslib_1.__importDefault(require("sinon"));
const test_utils_1 = require("../../utils/test-utils");
const PlatformTools_1 = require("../../../src/platform/PlatformTools");
describe("github issues > #3302 Tracking query time for slow queries and statsd timers", () => {
    let connections;
    let stub;
    let sandbox;
    const beforeQueryLogPath = app_root_path_1.default + "/before-query.log";
    const afterQueryLogPath = app_root_path_1.default + "/after-query.log";
    before(async () => {
        connections = await (0, test_utils_1.createTestingConnections)({
            entities: [__dirname + "/entity/*{.js,.ts}"],
            subscribers: [__dirname + "/subscriber/*{.js,.ts}"],
        });
        sandbox = sinon_1.default.createSandbox();
        stub = sandbox.stub(PlatformTools_1.PlatformTools, "appendFileSync");
    });
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    afterEach(async () => {
        stub.resetHistory();
        sandbox.restore();
        await (0, test_utils_1.closeTestingConnections)(connections);
    });
    it("if query executed, should write query to file", async () => Promise.all(connections.map(async (connection) => {
        const testQuery = `SELECT COUNT(*) FROM ${connection.driver.escape("post")}`;
        await connection.query(testQuery);
        sinon_1.default.assert.calledWith(stub, beforeQueryLogPath, sinon_1.default.match(testQuery));
        sinon_1.default.assert.calledWith(stub, afterQueryLogPath, sinon_1.default.match(testQuery));
    })));
});
//# sourceMappingURL=issue-3302.js.map