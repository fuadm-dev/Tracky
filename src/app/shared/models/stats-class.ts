import { Time } from "@angular/common";
import { _Date } from "./_date";

export class StatsClass {
  height: number = 0;
  startDate: _Date;
  startWeight: number = 0;
  currentWeight: number = 0;
  targetWeight: number = 0;
  predictedWeight: number = 0;
  expectedLossRate: number;
  actualLossRate: number = 0;
  totalTimeFrame: Time;
  currentTimeFrame: Time;
  timeFromStart: Time;
  timeToTarget: Time;
  changeWeight: number = 0;
  changeBmi: number = 0;
  onTarget: boolean = false;
  percentProgress: number = 0;
  percentTime: number = 0;
}
