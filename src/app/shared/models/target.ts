import { IBmi } from './bmi';

export class Target {
  date?: Date = new Date();
  weight: number = 0;
  bmi?: IBmi = { bmi: 0, bmiStatus: '' };
  target: Target;
}
