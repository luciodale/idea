"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const routes_1 = tslib_1.__importDefault(require("./strategies/routes"));
const app = (0, express_1.default)();
const port = 3000; // default port to listen
// define a route handler for the default home page
app.get('/', (_req, res) => {
    res.send('ok');
});
app.use('/strategies', routes_1.default);
// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=strategyService.js.map