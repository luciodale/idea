import { StrategyType } from '../types';
export declare function fetchMarketData(): Promise<any>;
export declare function fetchActiveStrategies(): Record<StrategyType, number[]>;
