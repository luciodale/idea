import { StrategyType } from '../types';
import axios from 'axios';

export async function fetchMarketData() {
  // Implementation details here
  const marketData = await axios.get('/market-data');
  return marketData.data;
}

export function fetchActiveStrategies() {
  // mock db response
  const activeStr: { user: number; strategy: StrategyType }[] = [
    { user: 1, strategy: 'conservative' },
    { user: 2, strategy: 'conservative' },
    { user: 3, strategy: 'moderate' },
    { user: 4, strategy: 'risky' },
  ];
  // the group by can be done in Postgres
  const groupedByStr = activeStr.reduce((coll, { user, strategy }) => {
    return {
      ...coll,
      [strategy]: coll[strategy] ? [...coll[strategy], user] : [user],
    };
  }, {} as Record<StrategyType, number[]>);

  return groupedByStr;
}
