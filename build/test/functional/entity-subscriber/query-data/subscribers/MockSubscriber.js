"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockSubscriber = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../../src");
let MockSubscriber = class MockSubscriber {
    constructor() {
        this.calledData = [];
    }
    afterUpdate(event) {
        this.calledData.push(event.queryRunner.data);
    }
};
exports.MockSubscriber = MockSubscriber;
exports.MockSubscriber = MockSubscriber = tslib_1.__decorate([
    (0, src_1.EventSubscriber)()
], MockSubscriber);
//# sourceMappingURL=MockSubscriber.js.map