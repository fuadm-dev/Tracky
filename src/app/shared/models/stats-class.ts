import { Time } from "@angular/common";

export class StatsClass {
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
