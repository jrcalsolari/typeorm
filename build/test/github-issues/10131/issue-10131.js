"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const Example_1 = require("./entity/Example");
const SqlServerDriver_1 = require("../../../src/driver/sqlserver/SqlServerDriver");
const sinon_1 = tslib_1.__importDefault(require("sinon"));
describe("github issues > #10131 optional to disable ascii to unicode parameter conversion", () => {
    let connections;
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    afterEach(() => sinon_1.default.restore());
    describe("when disableAsciiToUnicodeParamConversion is true", () => {
        let driver;
        before(async () => {
            connections = await (0, test_utils_1.createTestingConnections)({
                entities: [Example_1.Example],
                enabledDrivers: ["mssql"],
                schemaCreate: false,
                dropSchema: true,
                driverSpecific: {
                    options: {
                        disableAsciiToUnicodeParamConversion: true,
                    },
                },
            });
        });
        after(() => (0, test_utils_1.closeTestingConnections)(connections));
        it("should disable ascii to unicode parameter conversion", () => Promise.all(connections.map(async (connection) => {
            driver = new SqlServerDriver_1.SqlServerDriver(connection);
            const driverNCharSpy = sinon_1.default.spy(driver.mssql, "NChar");
            const driverNVarCharSpy = sinon_1.default.spy(driver.mssql, "NVarChar");
            const driverCharSpy = sinon_1.default.spy(driver.mssql, "Char");
            const driverVarCharSpy = sinon_1.default.spy(driver.mssql, "VarChar");
            const entity = new Example_1.Example();
            entity.varCharField = "test";
            entity.charField = "test";
            const repo = connection.getRepository(Example_1.Example);
            await repo.save(entity);
            sinon_1.default.assert.called(driverCharSpy);
            sinon_1.default.assert.called(driverVarCharSpy);
            sinon_1.default.assert.notCalled(driverNCharSpy);
            sinon_1.default.assert.notCalled(driverNVarCharSpy);
        })));
    });
    describe("when disableAsciiToUnicodeParamConversion is false", () => {
        let driver;
        before(async () => {
            connections = await (0, test_utils_1.createTestingConnections)({
                entities: [Example_1.Example],
                enabledDrivers: ["mssql"],
                schemaCreate: false,
                dropSchema: true,
                driverSpecific: {
                    options: {
                        disableAsciiToUnicodeParamConversion: false,
                    },
                },
            });
        });
        after(() => (0, test_utils_1.closeTestingConnections)(connections));
        it("should not disable ascii to unicode parameter conversion", () => Promise.all(connections.map(async (connection) => {
            driver = new SqlServerDriver_1.SqlServerDriver(connection);
            const driverNCharSpy = sinon_1.default.spy(driver.mssql, "NChar");
            const driverNVarCharSpy = sinon_1.default.spy(driver.mssql, "NVarChar");
            const driverCharSpy = sinon_1.default.spy(driver.mssql, "Char");
            const driverVarCharSpy = sinon_1.default.spy(driver.mssql, "VarChar");
            const entity = new Example_1.Example();
            entity.varCharField = "test";
            entity.charField = "test";
            const repo = connection.getRepository(Example_1.Example);
            await repo.save(entity);
            sinon_1.default.assert.notCalled(driverCharSpy);
            sinon_1.default.assert.notCalled(driverVarCharSpy);
            sinon_1.default.assert.called(driverNCharSpy);
            sinon_1.default.assert.called(driverNVarCharSpy);
        })));
    });
});
//# sourceMappingURL=issue-10131.js.map