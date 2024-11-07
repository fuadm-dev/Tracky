import { IBmi } from './bmi';

export class Weight {
  [key: string]: any;

  date?: Date = new Date();
  weight: number = 0;
  bmi?: IBmi = { bmi: 0, bmiStatus: '' };
  monthDate?: any;
}
