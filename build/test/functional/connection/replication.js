"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("../../utils/test-setup");
const chai_1 = require("chai");
const Post_1 = require("./entity/Post");
const Category_1 = require("./entity/Category");
const test_utils_1 = require("../../utils/test-utils");
const expectCurrentApplicationName = async (queryRunner, name) => {
    const result = await queryRunner.query("SELECT current_setting('application_name') as application_name;");
    (0, chai_1.expect)(result[0].application_name).to.equal(name);
};
describe("Connection replication", () => {
    describe("after connection is established successfully", function () {
        let connection;
        beforeEach(async () => {
            const ormConfigConnectionOptionsArray = (0, test_utils_1.getTypeOrmConfig)();
            const postgres = ormConfigConnectionOptionsArray.find((options) => options.type == "postgres");
            if (!postgres)
                throw new Error("need a postgres connection in the test connection options to test replication");
            connection = (await (0, test_utils_1.createTestingConnections)({
                entities: [Post_1.Post, Category_1.Category],
                enabledDrivers: ["postgres"],
                schemaCreate: true,
                dropSchema: true,
                driverSpecific: {
                    replication: {
                        master: { ...postgres, applicationName: "master" },
                        slaves: [{ ...postgres, applicationName: "slave" }],
                    },
                },
            }))[0];
            if (!connection)
                return;
            const post = new Post_1.Post();
            post.title = "TypeORM Intro";
            await connection
                .createQueryBuilder()
                .insert()
                .into(Post_1.Post)
                .values(post)
                .execute();
        });
        afterEach(() => (0, test_utils_1.closeTestingConnections)([connection]));
        it("connection.isConnected should be true", () => {
            if (!connection || connection.driver.options.type !== "postgres") {
                return;
            }
            connection.isInitialized.should.be.true;
        });
        it("query runners should go to the master by default", async () => {
            if (!connection || connection.driver.options.type !== "postgres") {
                return;
            }
            const queryRunner = connection.createQueryRunner();
            (0, chai_1.expect)(queryRunner.getReplicationMode()).to.equal("master");
            await expectCurrentApplicationName(queryRunner, "master");
            await queryRunner.release();
        });
        it("query runners can have their replication mode overridden", async () => {
            if (!connection || connection.driver.options.type !== "postgres") {
                return;
            }
            let queryRunner = connection.createQueryRunner("master");
            queryRunner.getReplicationMode().should.equal("master");
            await expectCurrentApplicationName(queryRunner, "master");
            await queryRunner.release();
            queryRunner = connection.createQueryRunner("slave");
            queryRunner.getReplicationMode().should.equal("slave");
            await expectCurrentApplicationName(queryRunner, "slave");
            await queryRunner.release();
        });
        it("read queries should go to the slaves by default", async () => {
            if (!connection || connection.driver.options.type !== "postgres") {
                return;
            }
            const result = await connection.manager
                .createQueryBuilder(Post_1.Post, "post")
                .select("id")
                .addSelect("current_setting('application_name')", "current_setting")
                .execute();
            (0, chai_1.expect)(result[0].current_setting).to.equal("slave");
        });
        it("write queries should go to the master", async () => {
            if (!connection || connection.driver.options.type !== "postgres") {
                return;
            }
            const result = await connection.manager
                .createQueryBuilder(Post_1.Post, "post")
                .insert()
                .into(Post_1.Post)
                .values({
                title: () => "current_setting('application_name')",
            })
                .returning("title")
                .execute();
            (0, chai_1.expect)(result.raw[0].title).to.equal("master");
        });
    });
    describe("with custom replication default mode", function () {
        let connection;
        beforeEach(async () => {
            const ormConfigConnectionOptionsArray = (0, test_utils_1.getTypeOrmConfig)();
            const postgres = ormConfigConnectionOptionsArray.find((options) => options.type == "postgres");
            if (!postgres)
                throw new Error("need a postgres connection in the test connection options to test replication");
            connection = (await (0, test_utils_1.createTestingConnections)({
                entities: [Post_1.Post, Category_1.Category],
                enabledDrivers: ["postgres"],
                schemaCreate: true,
                dropSchema: true,
                driverSpecific: {
                    replication: {
                        defaultMode: "master",
                        master: { ...postgres, applicationName: "master" },
                        slaves: [{ ...postgres, applicationName: "slave" }],
                    },
                },
            }))[0];
            if (!connection)
                return;
            const post = new Post_1.Post();
            post.title = "TypeORM Intro";
            await connection
                .createQueryBuilder()
                .insert()
                .into(Post_1.Post)
                .values(post)
                .execute();
        });
        afterEach(() => (0, test_utils_1.closeTestingConnections)([connection]));
        it("query runners should go to the master by default", async () => {
            if (!connection || connection.driver.options.type !== "postgres") {
                return;
            }
            const queryRunner = connection.createQueryRunner();
            (0, chai_1.expect)(queryRunner.getReplicationMode()).to.equal("master");
            await expectCurrentApplicationName(queryRunner, "master");
            await queryRunner.release();
        });
        it("query runners can have their replication mode overridden", async () => {
            if (!connection || connection.driver.options.type !== "postgres") {
                return;
            }
            let queryRunner = connection.createQueryRunner("master");
            queryRunner.getReplicationMode().should.equal("master");
            await expectCurrentApplicationName(queryRunner, "master");
            await queryRunner.release();
            queryRunner = connection.createQueryRunner("slave");
            queryRunner.getReplicationMode().should.equal("slave");
            await expectCurrentApplicationName(queryRunner, "slave");
            await queryRunner.release();
        });
        it("read queries should go to the master by default", async () => {
            if (!connection || connection.driver.options.type !== "postgres") {
                return;
            }
            const result = await connection.manager
                .createQueryBuilder(Post_1.Post, "post")
                .select("id")
                .addSelect("current_setting('application_name')", "current_setting")
                .execute();
            (0, chai_1.expect)(result[0].current_setting).to.equal("master");
        });
    });
});
//# sourceMappingURL=replication.js.map