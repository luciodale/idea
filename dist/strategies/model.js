"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchActiveStrategies = exports.fetchMarketData = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
async function fetchMarketData() {
    // Implementation details here
    const marketData = await axios_1.default.get('/market-data');
    return marketData.data;
}
exports.fetchMarketData = fetchMarketData;
function fetchActiveStrategies() {
    const activeStr = [
        { user: 1, strategy: 'conservative' },
        { user: 2, strategy: 'conservative' },
        { user: 3, strategy: 'moderate' },
        { user: 4, strategy: 'risky' },
    ];
    const groupedByStr = activeStr.reduce((coll, { user, strategy }) => {
        return Object.assign(Object.assign({}, coll), { [strategy]: coll[strategy] ? [...coll[strategy], user] : [user] });
    }, {});
    return groupedByStr;
}
exports.fetchActiveStrategies = fetchActiveStrategies;
//# sourceMappingURL=model.js.map