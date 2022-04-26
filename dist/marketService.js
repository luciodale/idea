"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001; // default port to listen
// define a route handler for the default home page
app.get('/market-data', (_req, res) => {
    setTimeout(() => {
        res.json([
            { ticker: 'APPL', value: 34 },
            { ticker: 'IBM', value: 31 },
        ]);
    }),
        500;
});
// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=marketService.js.map