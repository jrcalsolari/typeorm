"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModel = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../../../src/index");
const DataModel_1 = require("./DataModel");
let MainModel = class MainModel {
};
exports.MainModel = MainModel;
tslib_1.__decorate([
    (0, index_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], MainModel.prototype, "id", void 0);
tslib_1.__decorate([
    (0, index_1.OneToMany)((type) => DataModel_1.DataModel, (dataModel) => dataModel.main, {
        cascade: true,
        eager: true,
    }),
    tslib_1.__metadata("design:type", Array)
], MainModel.prototype, "dataModel", void 0);
exports.MainModel = MainModel = tslib_1.__decorate([
    (0, index_1.Entity)()
], MainModel);
//# sourceMappingURL=MainModel.js.map