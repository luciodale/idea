"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const types_1 = require("../../types");
function strategy() {
    const data = (0, crypto_1.randomInt)(10);
    if (data < 4)
        return types_1.Action.hold;
    else if (data < 7)
        return types_1.Action.sell;
    else
        return types_1.Action.hold;
}
exports.default = strategy;
//# sourceMappingURL=moderate.js.map