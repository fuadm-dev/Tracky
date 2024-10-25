import { IBmi } from './bmi';

export class Weight {
  date?: Date = new Date();
  weight: number = 0;
  bmi: IBmi = {bmi: 0, bmiStatus: ''};
}
