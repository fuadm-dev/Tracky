export interface Statistics {
  // startWeight: number;
  currentWeight: number;
  targetWeight: number;
  predictedWeight: number;
  lossRate: number;
  daysSinceStart: number;
  weeksSinceStart: number;
  daysToTarget: number;
  weeksToTarget: number;
  changeWeight: number;
  changeBmi: number;
  onTarget: boolean;
  percentProgress: number;
  percentTime: number;
}
