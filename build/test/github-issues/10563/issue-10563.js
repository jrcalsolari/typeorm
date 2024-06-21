"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const chai_1 = require("chai");
const family_1 = require("./entity/family");
describe("github issues > #10653 Default value in child table/entity column decorator for multiple table inheritance is ignored for inherited columns", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: true,
        dropSchema: true,
        logging: true,
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should honor distinct default value configured on inherited column of child entity", async () => await Promise.all(dataSources.map(async (dataSource) => {
        const manager = dataSource.manager;
        let dog = new family_1.Dog();
        dog.name = "Fifi";
        await manager.save(dog);
        let fifi = await manager.findOneBy(family_1.Dog, {
            name: "Fifi",
        });
        (0, chai_1.assert)(fifi instanceof family_1.Dog && fifi["type"] == "PET", `Fifi=${JSON.stringify(fifi)}`);
    })));
});
//# sourceMappingURL=issue-10563.js.map