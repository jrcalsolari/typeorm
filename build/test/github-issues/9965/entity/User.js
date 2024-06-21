"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.BORROWED = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Book_1 = require("./Book");
exports.BORROWED = "borrowed";
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, src_1.PrimaryGeneratedColumn)("uuid"),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, src_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, src_1.ManyToMany)((_type) => Book_1.Book, {}),
    (0, src_1.JoinTable)({ name: exports.BORROWED }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "borrowed", void 0);
exports.User = User = tslib_1.__decorate([
    (0, src_1.Entity)()
], User);
//# sourceMappingURL=User.js.map