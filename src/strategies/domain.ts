import axios from 'axios';
import { StrategyType } from '../types.js';
import { strategyDispatcher } from './core-algos/index.js';
import { fetchActiveStrategies } from './model.js';

async function runStrategy(strategy: StrategyType, users: number[]) {
  // to fetch market data related to given strategy
  const marketData = await axios('http://localhost:3001/market-data');

  console.log();
  console.log('STRATEGY:', strategy);
  console.log('market data:', marketData.data);

  // to run the core strategy algo which yields sell/buy/hold
  const strategyDecision = strategyDispatcher(strategy);

  // to update users portfolios based on the strategy outcome
  users.map((user) => console.log('user:', user, 'action:', strategyDecision));

  return new Promise((_rej, res) => res);
}

export function strategyRunner() {
  // to fetch from the db the active strategies
  const activeStrategies = fetchActiveStrategies();

  Object.entries(activeStrategies).map(
    ([strategy, users]: [StrategyType, number[]]) =>
      runStrategy(strategy, users),
  );
}

export function runningStrategies(_req, res) {
  // mock handler that does nothing
  res.send('3');
}
