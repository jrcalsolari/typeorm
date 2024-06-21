"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultsTemplates = void 0;
const mysql_1 = require("./generate/mysql");
const postgres_1 = require("./generate/postgres");
const sqlite_1 = require("./generate/sqlite");
const oracle_1 = require("./generate/oracle");
const cockroachdb_1 = require("./generate/cockroachdb");
const mssql_js_1 = require("./generate/mssql.js");
exports.resultsTemplates = {
    mysql: mysql_1.mysql,
    mariadb: mysql_1.mysql,
    mssql: mssql_js_1.mssql,
    sqlite: sqlite_1.sqlite,
    "better-sqlite3": sqlite_1.sqlite,
    postgres: postgres_1.postgres,
    oracle: oracle_1.oracle,
    cockroachdb: cockroachdb_1.cockroachdb,
};
//# sourceMappingURL=result-templates-generate.js.map