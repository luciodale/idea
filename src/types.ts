export enum Action {
  buy = 'BUY',
  hold = 'HOLD',
  sell = 'SELL',
}

export type StrategyAction = Action;

export type StrategyType = 'conservative' | 'moderate' | 'risky';
