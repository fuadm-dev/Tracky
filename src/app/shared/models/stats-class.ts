import { _Time } from './_time';
import { Change } from './change';
import { ILossRate } from './iloss-rate';
import { Target } from './target';
import { Weight } from './weight';

export class StatsClass {
  height: number = 0;
  start: Weight = new Weight();
  target: Target = new Target();
  current: Weight = new Weight();
  predicted: Weight = new Weight();
  lossRate: ILossRate = { expected: 0, actual: 0 };
  totalTime: _Time = new _Time();
  remainingTime: _Time = new _Time();
  elapsedTime: _Time = new _Time();
  change: Change = new Change();
  onTarget: boolean = false;
  pctProgress: number = 0;
}
