"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const chai_1 = require("chai");
const entity_1 = require("./entity");
describe("github issues > #10431 When requesting nested relations on foreign key primary entities, relation becomes empty entity rather than null", () => {
    let connections;
    before(async () => (connections = await (0, test_utils_1.createTestingConnections)({
        entities: [entity_1.Category, entity_1.Product],
        schemaCreate: true,
        dropSchema: true,
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    after(() => (0, test_utils_1.closeTestingConnections)(connections));
    it("should return [] when requested nested relations are empty on ManyToMany relation with @VirtualColumn definitions", () => Promise.all(connections.map(async (connection) => {
        const productRepo = connection.getRepository(entity_1.Product);
        const testProduct = new entity_1.Product();
        testProduct.name = "foo";
        await productRepo.save(testProduct);
        const foundProduct = await productRepo.findOne({
            where: {
                id: testProduct.id,
            },
            relations: { categories: true },
        });
        (0, chai_1.expect)(foundProduct?.name).eq("foo");
        (0, chai_1.expect)(foundProduct?.categories).eql([]);
    })));
});
//# sourceMappingURL=issue-10431.js.map