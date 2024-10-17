import { _Time } from './_time';
import { Change } from './change';
import { ILossRate } from './iloss-rate';
import { Weight } from './weight';

export class StatsClass {
  height: number = 0;
  start: Weight;
  target: Weight;
  current: Weight;
  predicted: Weight = new Weight();
  lossRate: ILossRate = {expected: 0, actual: 0};
  totalTime: _Time;
  remainingTime: _Time = new _Time();
  expiredTime: _Time;
  change: Change = new Change();
  onTarget: boolean = false;
  pctProgress: number = 0;
  pctTime: number = 0;
}
