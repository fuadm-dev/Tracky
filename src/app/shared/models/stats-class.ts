import { _Date } from "./_date";
import { _Time } from "./_time";

export class StatsClass {
  height: number = 0;
  startDate: _Date;
  startWeight: number = 0;
  currentWeight: number = 0;
  targetWeight: number = 0;
  predictedWeight: number = 0;
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
