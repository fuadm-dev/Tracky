import { _Time } from './_time';
import { ILossRate } from './iloss-rate';
import { Weight } from './weight';

export class StatsClass {
  height: number = 0;
  start: Weight;
  target: Weight;
  current: Weight;
  predicted: Weight;
  lossRate: ILossRate;
  totalTime: _Time;
  remainingTime: _Time;
  expiredTime: _Time;
  weightChange: number = 0;
  bmiChange: number = 0;
  onTarget: boolean = false;
  pctProgress: number = 0;
  pctTime: number = 0;
}
