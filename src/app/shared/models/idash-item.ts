export interface IDashItem {
  title: string;
  date?: Date;
  units: string;
  weight?: number;
  progress?: number;
  elapsedWeekAsPercent?: number;
  calendar?: boolean;
  bmiComponent?: boolean;
}
