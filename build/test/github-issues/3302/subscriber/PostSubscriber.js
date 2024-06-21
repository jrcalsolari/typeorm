"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSubscriber = void 0;
const tslib_1 = require("tslib");
const Post_1 = require("../entity/Post");
const src_1 = require("../../../../src");
const PlatformTools_1 = require("../../../../src/platform/PlatformTools");
const app_root_path_1 = tslib_1.__importDefault(require("app-root-path"));
let PostSubscriber = class PostSubscriber {
    listenTo() {
        return Post_1.Post;
    }
    beforeQuery(event) {
        PlatformTools_1.PlatformTools.appendFileSync(app_root_path_1.default.path + "/before-query.log", event.query);
    }
    afterQuery(event) {
        PlatformTools_1.PlatformTools.appendFileSync(app_root_path_1.default.path + "/after-query.log", event.query);
    }
};
exports.PostSubscriber = PostSubscriber;
exports.PostSubscriber = PostSubscriber = tslib_1.__decorate([
    (0, src_1.EventSubscriber)()
], PostSubscriber);
//# sourceMappingURL=PostSubscriber.js.map