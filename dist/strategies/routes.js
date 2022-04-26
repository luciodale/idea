"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const domain_1 = require("./domain");
const strategiesRouter = (0, express_1.Router)();
strategiesRouter.get('/running', domain_1.runningStrategies);
(0, domain_1.strategyRunner)();
exports.default = strategiesRouter;
//# sourceMappingURL=routes.js.map