"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../../utils/test-utils");
const Post_1 = require("./entity/Post");
const src_1 = require("../../../../src");
const chai_1 = require("chai");
describe("repository > aggregate methods", () => {
    let connections;
    before(async () => {
        connections = await (0, test_utils_1.createTestingConnections)({
            entities: [Post_1.Post],
            schemaCreate: true,
            dropSchema: true,
        });
        await Promise.all(connections.map(async (connection) => {
            for (let i = 0; i < 100; i++) {
                const post = new Post_1.Post();
                post.id = i;
                post.counter = i + 1;
                await connection.getRepository(Post_1.Post).save(post);
            }
        }));
    });
    after(() => (0, test_utils_1.closeTestingConnections)(connections));
    describe("sum", () => {
        it("should return the aggregate sum", () => Promise.all(connections.map(async (connection) => {
            const sum = await connection
                .getRepository(Post_1.Post)
                .sum("counter");
            (0, chai_1.expect)(sum).to.equal(5050);
        })));
        it("should return null when 0 rows match the query", () => Promise.all(connections.map(async (connection) => {
            const sum = await connection
                .getRepository(Post_1.Post)
                .sum("counter", { id: (0, src_1.LessThan)(0) });
            (0, chai_1.expect)(sum).to.be.null;
        })));
    });
    describe("average", () => {
        it("should return the aggregate average", () => Promise.all(connections.map(async (connection) => {
            const average = await connection
                .getRepository(Post_1.Post)
                .average("counter");
            // Some RDBMSs (e.g. SQL Server) will return an int when averaging an int column, so either
            // answer is acceptable.
            (0, chai_1.expect)([50, 50.5]).to.include(average);
        })));
        it("should return null when 0 rows match the query", () => Promise.all(connections.map(async (connection) => {
            const average = await connection
                .getRepository(Post_1.Post)
                .average("counter", {
                id: (0, src_1.LessThan)(0),
            });
            (0, chai_1.expect)(average).to.be.null;
        })));
    });
    describe("minimum", () => {
        it("should return the aggregate minimum", () => Promise.all(connections.map(async (connection) => {
            const minimum = await connection
                .getRepository(Post_1.Post)
                .minimum("counter");
            (0, chai_1.expect)(minimum).to.equal(1);
        })));
        it("should return null when 0 rows match the query", () => Promise.all(connections.map(async (connection) => {
            const minimum = await connection
                .getRepository(Post_1.Post)
                .minimum("counter", {
                id: (0, src_1.LessThan)(0),
            });
            (0, chai_1.expect)(minimum).to.be.null;
        })));
    });
    describe("maximum", () => {
        it("should return the aggregate maximum", () => Promise.all(connections.map(async (connection) => {
            const maximum = await connection
                .getRepository(Post_1.Post)
                .maximum("counter");
            (0, chai_1.expect)(maximum).to.equal(100);
        })));
        it("should return null when 0 rows match the query", () => Promise.all(connections.map(async (connection) => {
            const maximum = await connection
                .getRepository(Post_1.Post)
                .maximum("counter", {
                id: (0, src_1.LessThan)(0),
            });
            (0, chai_1.expect)(maximum).to.be.null;
        })));
    });
});
//# sourceMappingURL=repository-aggregate-methods.js.map