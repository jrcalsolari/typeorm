"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedSubscriber = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const User_1 = require("../entity/User");
let BorrowedSubscriber = class BorrowedSubscriber {
    listenTo() {
        return User_1.BORROWED;
    }
    afterInsert() { }
};
exports.BorrowedSubscriber = BorrowedSubscriber;
exports.BorrowedSubscriber = BorrowedSubscriber = tslib_1.__decorate([
    (0, src_1.EventSubscriber)()
], BorrowedSubscriber);
//# sourceMappingURL=BorrrowedSubscriber.js.map