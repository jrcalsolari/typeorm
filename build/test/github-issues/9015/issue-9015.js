"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const chai_1 = require("chai");
const src_1 = require("../../../src");
const Post_1 = require("./entity/Post");
const test_utils_1 = require("../../utils/test-utils");
describe("github issues > #9015 @UpdateDateColumn not updating on upsert", () => {
    let dataSource;
    let repository;
    before(async () => {
        const options = (0, test_utils_1.setupSingleTestingConnection)("postgres", {
            entities: [__dirname + "/entity/*{.js,.ts}"],
            schemaCreate: true,
            dropSchema: true,
        });
        if (!options)
            return;
        dataSource = new src_1.DataSource(options);
        await dataSource.initialize();
    });
    beforeEach(async () => {
        if (!dataSource)
            return;
        await (0, test_utils_1.reloadTestingDatabases)([dataSource]);
        repository = dataSource.getRepository(Post_1.Post);
    });
    after(() => (0, test_utils_1.closeTestingConnections)([dataSource]));
    it("should update the @UpdateDateColumn", async () => {
        if (!dataSource)
            return;
        const oldDate = new Date("1970-01-01");
        const post = new Post_1.Post();
        post.id = 1;
        post.title = "Some post";
        post.description = "Some description";
        post.updated_at = oldDate;
        await repository.save(post);
        await repository.upsert({
            title: post.title,
            description: "Some new description",
        }, {
            conflictPaths: { title: true },
            skipUpdateIfNoValuesChanged: true,
        });
        const postReloaded = await repository.findOne({
            where: { id: post.id },
        });
        (0, chai_1.expect)(postReloaded).to.exist;
        (0, chai_1.expect)(postReloaded.description).to.be.equal("Some new description");
        (0, chai_1.expect)(postReloaded.updated_at.toString()).to.not.equal(oldDate.toString());
    });
});
//# sourceMappingURL=issue-9015.js.map