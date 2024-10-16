import { _Time } from './_time';
import { Weight } from './weight';

export class StatsClass {
  height: number = 0;
  start: Weight;
  target: Weight;
  current: Weight;
  predicted: Weight;
  expectedLossRate: number;
  actualLossRate: number = 0;
  totalTimeFrame: _Time;
  currentTimeFrame: _Time;
  timeFromStart: _Time;
  timeToTarget: _Time;
  changeWeight: number = 0;
  changeBmi: number = 0;
  onTarget: boolean = false;
  percentProgress: number = 0;
  percentTime: number = 0;
}
