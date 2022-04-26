import { StrategyType } from '../../types.js';
import conservative from './conservative.js';
import moderate from './moderate.js';
import risky from './risky.js';

export function strategyDispatcher(strategyType: StrategyType) {
  switch (strategyType) {
    case 'conservative':
      return conservative();
    case 'moderate':
      return moderate();
    case 'risky':
      return risky();
  }
}
