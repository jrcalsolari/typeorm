"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestBlogSubscriber = void 0;
const tslib_1 = require("tslib");
const EventSubscriber_1 = require("../../../../../../src/decorator/listeners/EventSubscriber");
let TestBlogSubscriber = class TestBlogSubscriber {
    /**
     * Called after entity insertion.
     */
    beforeInsert(event) {
        // Do nothing
    }
};
exports.TestBlogSubscriber = TestBlogSubscriber;
exports.TestBlogSubscriber = TestBlogSubscriber = tslib_1.__decorate([
    (0, EventSubscriber_1.EventSubscriber)()
], TestBlogSubscriber);
//# sourceMappingURL=TestBlogSubscriber.js.map