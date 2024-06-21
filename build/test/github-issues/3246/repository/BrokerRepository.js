"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerRepository = void 0;
const tslib_1 = require("tslib");
const src_1 = require("../../../../src");
const Broker_1 = require("../entity/Broker");
let BrokerRepository = class BrokerRepository extends src_1.AbstractRepository {
    async createBroker(broker) {
        return this.repository.save(broker);
    }
};
exports.BrokerRepository = BrokerRepository;
exports.BrokerRepository = BrokerRepository = tslib_1.__decorate([
    (0, src_1.EntityRepository)(Broker_1.Broker)
], BrokerRepository);
//# sourceMappingURL=BrokerRepository.js.map