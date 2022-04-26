"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runningStrategies = exports.strategyRunner = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const index_1 = require("./core-algos/index");
const model_1 = require("./model");
async function oneStrategy(strategy, users) {
    const marketData = await (0, axios_1.default)('/market-data');
    console.log(marketData);
    const strategyDecision = (0, index_1.runStrategy)(strategy);
    console.log('strategy', strategy);
    console.log('decision', strategyDecision);
    users.map((user) => console.log('user:', user, 'action:', strategyDecision));
}
function strategyRunner() {
    const activeStrategies = (0, model_1.fetchActiveStrategies)();
    console.log(activeStrategies);
    Object.entries(activeStrategies).map(([strategy, users]) => oneStrategy(strategy, users));
}
exports.strategyRunner = strategyRunner;
function runningStrategies(_req, res) {
    res.send('3');
}
exports.runningStrategies = runningStrategies;
//# sourceMappingURL=domain.js.map