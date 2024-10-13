export interface Statistics {
  startWeight: number;
  currentWeight: number;
  targetWeight: number;
  predictedWeight: number;
  lossRate: number;
  weeksLeft: number;
  changeWeight: number;
  changeBmi: number;
  onTarget: boolean;
  percentProgress: number;
  percentTime: number;
}
