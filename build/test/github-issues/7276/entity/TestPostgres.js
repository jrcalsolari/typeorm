"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterCluster = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
let ClusterCluster = class ClusterCluster {
};
exports.ClusterCluster = ClusterCluster;
tslib_1.__decorate([
    (0, src_1.Column)("uuid", { primary: true, name: "uuid" }),
    tslib_1.__metadata("design:type", String)
], ClusterCluster.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("timestamp with time zone", { name: "created_at" }),
    tslib_1.__metadata("design:type", Date)
], ClusterCluster.prototype, "created_at", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("timestamp with time zone", { name: "updated_at" }),
    tslib_1.__metadata("design:type", Date)
], ClusterCluster.prototype, "updated_at", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("character varying", { name: "category", length: 30 }),
    tslib_1.__metadata("design:type", String)
], ClusterCluster.prototype, "category", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("character varying", { name: "parent", length: 255 }),
    tslib_1.__metadata("design:type", String)
], ClusterCluster.prototype, "parent", void 0);
tslib_1.__decorate([
    (0, src_1.Column)("varchar", { name: "children", array: true }),
    tslib_1.__metadata("design:type", Array)
], ClusterCluster.prototype, "children", void 0);
exports.ClusterCluster = ClusterCluster = tslib_1.__decorate([
    (0, src_1.Index)("cluster_clu_created_fef900_idx", ["created_at"], {}),
    (0, src_1.Index)("cluster_cluster_pkey", ["uuid"], { unique: true }),
    (0, src_1.Entity)("cluster_cluster", { schema: "public" })
], ClusterCluster);
//# sourceMappingURL=TestPostgres.js.map