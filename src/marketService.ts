import express from 'express';
const app = express();
const port = 3001;

app.get('/market-data', (_req, res) => {
  setTimeout(() => {
    res.json([
      { ticker: 'APPL', value: 30 },
      { ticker: 'IBM', value: 31 },
    ]);
  }, 2000);
});

app.listen(port, () => {
  console.log(`Market server started at http://localhost:${port}`);
});
