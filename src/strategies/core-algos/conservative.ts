import { randomInt } from 'crypto';
import { Action, StrategyAction } from '../../types.js';

export default function strategy(): StrategyAction {
  const data = randomInt(10);

  if (data < 4) return Action.hold;
  else if (data < 7) return Action.sell;
  else return Action.hold;
}
