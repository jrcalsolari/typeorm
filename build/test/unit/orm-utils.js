"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrmUtils_1 = require("../../src/util/OrmUtils");
const chai_1 = require("chai");
describe(`orm-utils`, () => {
    describe("parseSqlCheckExpression", () => {
        it("parses a simple CHECK constraint", () => {
            // Spaces between CHECK values
            (0, chai_1.expect)(OrmUtils_1.OrmUtils.parseSqlCheckExpression(`CREATE TABLE "foo_table" (
                        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                        "col" varchar CHECK("col" IN ('FOO', 'BAR', 'BAZ')) NOT NULL,
                        "some_other_col" integer NOT NULL
                        );`, "col")).to.have.same.members(["FOO", "BAR", "BAZ"]);
            // No spaces between CHECK values
            (0, chai_1.expect)(OrmUtils_1.OrmUtils.parseSqlCheckExpression(`CREATE TABLE "foo_table" (
                        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                        "col" varchar CHECK("col" IN ('FOO','BAR','BAZ')) NOT NULL,
                        "some_other_col" integer NOT NULL
                        );`, "col")).to.have.same.members(["FOO", "BAR", "BAZ"]);
        });
        it("returns undefined when the column doesn't have a CHECK", () => {
            (0, chai_1.expect)(OrmUtils_1.OrmUtils.parseSqlCheckExpression(`CREATE TABLE "foo_table" (
                        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                        "col" varchar NOT NULL,
                        "some_other_col" integer NOT NULL
                        );`, "col")).to.equal(undefined);
        });
        it("parses a CHECK constraint with values containing special characters", () => {
            (0, chai_1.expect)(OrmUtils_1.OrmUtils.parseSqlCheckExpression(`CREATE TABLE "foo_table" (
                        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                        "col" varchar CHECK("col" IN (
                                    'a,b', 
                                    ',c,', 
                                    'd''d', 
                                    '''e''', 
                                    'f'',''f', 
                                    ''')', 
                                    ')'''
                                )
                            ) NOT NULL,
                        "some_other_col" integer NOT NULL
                        );`, "col")).to.have.same.members([
                "a,b",
                ",c,",
                "d'd",
                "'e'",
                "f','f",
                "')",
                ")'",
            ]);
        });
    });
});
//# sourceMappingURL=orm-utils.js.map