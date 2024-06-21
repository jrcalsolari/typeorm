"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const test_utils_1 = require("../../utils/test-utils");
const chai_1 = require("chai");
const location_1 = require("./entity/location");
const configuration_1 = require("./entity/configuration");
const asset_1 = require("./entity/asset");
describe("github issues > #10209", () => {
    let dataSources;
    before(async () => (dataSources = await (0, test_utils_1.createTestingConnections)({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: true,
        dropSchema: true,
    })));
    beforeEach(() => (0, test_utils_1.reloadTestingDatabases)(dataSources));
    after(() => (0, test_utils_1.closeTestingConnections)(dataSources));
    it("should not fail to run multiple nested transactions in parallel", () => Promise.all(dataSources.map(async (dataSource) => {
        const manager = dataSource.createEntityManager();
        await manager.transaction(async (txManager) => {
            const location = txManager.create(location_1.LocationEntity);
            location.name = "location-0";
            location.configurations = [];
            for (let c = 0; c < 3; c++) {
                const config = txManager.create(configuration_1.ConfigurationEntity);
                config.name = `config-${c}`;
                config.status = configuration_1.ConfigurationStatus.new;
                config.assets = [];
                for (let a = 0; a < 5; a++) {
                    const asset = txManager.create(asset_1.AssetEntity);
                    asset.name = `asset-${c}-${a}`;
                    asset.status = asset_1.AssetStatus.new;
                    config.assets.push(asset);
                }
                location.configurations.push(config);
            }
            await txManager.save(location);
        });
        const location = (await manager.findOne(location_1.LocationEntity, {
            where: {
                name: "location-0",
            },
            relations: ["configurations", "configurations.assets"],
        })) || {};
        await manager.transaction(async (txManager) => {
            return Promise.all(location.configurations.map(async (config) => {
                await txManager.transaction(async (txManager2) => {
                    await Promise.all(config.assets.map(async (asset) => {
                        asset.status = asset_1.AssetStatus.deleted;
                        await txManager2.save(asset);
                        await txManager2.softDelete(asset_1.AssetEntity, asset);
                    }));
                });
                config.status = configuration_1.ConfigurationStatus.deleted;
                return await txManager.save(config);
            }));
        });
        // We only care that the transaction above didn't fail
        (0, chai_1.expect)(true).to.be.true;
    })));
});
//# sourceMappingURL=issue-10209.js.map