"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStrategy = void 0;
const tslib_1 = require("tslib");
const conservative_1 = tslib_1.__importDefault(require("./conservative"));
const moderate_1 = tslib_1.__importDefault(require("./moderate"));
const risky_1 = tslib_1.__importDefault(require("./risky"));
function runStrategy(strategyType) {
    switch (strategyType) {
        case 'conservative':
            return (0, conservative_1.default)();
        case 'moderate':
            return (0, moderate_1.default)();
        case 'risky':
            return (0, risky_1.default)();
    }
}
exports.runStrategy = runStrategy;
//# sourceMappingURL=index.js.map