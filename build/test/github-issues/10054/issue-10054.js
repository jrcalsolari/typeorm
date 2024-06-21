"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../../src");
const test_utils_1 = require("../../utils/test-utils");
const Person_1 = require("./entity/Person");
const chai_1 = require("chai");
describe("github issues > #10054 Nested 'Or' Condition/Operation Support in Repository Where condition", () => {
    let dataSources;
    before(async () => {
        dataSources = await (0, test_utils_1.createTestingConnections)({
            entities: [Person_1.Person],
            enabledDrivers: ["postgres", "mysql"],
            schemaCreate: true,
            dropSchema: true,
        });
    });
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should find person where name starts with foo or equal to jane", async () => {
        await Promise.all(dataSources.map(async (dataSource) => {
            const foo = new Person_1.Person();
            foo.name = "Foo";
            foo.age = null;
            const john = new Person_1.Person();
            john.name = "John";
            john.age = 11;
            const dave = new Person_1.Person();
            dave.name = "Jane";
            dave.age = 12;
            const foobar = new Person_1.Person();
            foobar.name = "FooBar";
            foobar.age = 14;
            await dataSource.manager.save([foo, john, dave, foobar]);
            const persons = await dataSource.manager.find(Person_1.Person, {
                where: {
                    name: (0, src_1.Or)((0, src_1.ILike)("foo%"), (0, src_1.Equal)("Jane")),
                },
            });
            (0, chai_1.expect)(persons).to.have.length(3);
            (0, chai_1.expect)(persons.find((user) => user.name === "Foo")).to.be.not
                .undefined;
            (0, chai_1.expect)(persons.find((user) => user.name === "Jane")).to.be.not
                .undefined;
            (0, chai_1.expect)(persons.find((user) => user.name === "FooBar")).to.be.not
                .undefined;
        }));
    });
});
//# sourceMappingURL=issue-10054.js.map