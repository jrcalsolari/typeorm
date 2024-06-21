"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const Post_1 = require("./entity/Post");
const Category_1 = require("./entity/Category");
const chai_1 = require("chai");
describe("github issues > #5704 Many-to-many gives error ER_DUP_ENTRY everytime I save. This one also related to inverseJoinColumn.", () => {
    let connections;
    before(async () => (connections = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        subscribers: [__dirname + "/subscriber/*{.js,.ts}"],
        enabledDrivers: ["mysql"],
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(connections));
    after(() => (0, test_utils_1.closeTestingConnections)(connections));
    it("should work as expected", () => Promise.all(connections.map(async (connection) => {
        const postName = "post for issue #5704";
        const catName = "cat for issue #5704";
        let post1 = await connection.manager.findOne(Post_1.Post, {
            where: { title: postName },
        });
        let category1 = await connection.manager.findOne(Category_1.Category, {
            where: { name: catName },
        });
        if (!category1) {
            category1 = new Category_1.Category();
            category1.name = catName;
            await connection.manager.save(category1);
        }
        if (!post1) {
            post1 = new Post_1.Post();
            post1.title = postName;
            post1.categories = Promise.resolve([category1]);
            await connection.manager.save(post1);
        }
        const categoryTest = await connection.manager.findOne(Category_1.Category, {
            where: { name: catName },
        });
        chai_1.assert.isTrue(categoryTest instanceof Category_1.Category);
        post1.categories = Promise.resolve([categoryTest]);
        // This is the line that causes the error "QueryFailedError: ER_DUP_ENTRY: Duplicate entry '1-1' for key 'PRIMARY'" with previous code
        await connection.manager.save(post1);
    })));
});
//# sourceMappingURL=issue-5704.js.map