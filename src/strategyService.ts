import express from 'express';
import { strategyRunner } from './strategies/domain.js';
import strategiesRouter from './strategies/routes.js';
const app = express();
const port = 3000;

const task = setInterval(strategyRunner, 5000);

app.get('/', (_req, res) => {
  res.send('ok');
});

app.get('/stop', (_req, res) => {
  clearInterval(task);
  res.send('ok');
});

app.use('/strategies', strategiesRouter);

app.listen(port, () => {
  console.log(`Strategy server started at http://localhost:${port}`);
});
