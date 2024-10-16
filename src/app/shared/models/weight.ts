import { BmiService } from 'src/app/service/bmi.service';
import { IDate_ } from './_date';
import { IBmi } from './bmi';

export class Weight {
  date: IDate_;
  weight: number = 0;
  bmi: IBmi;

  constructor(date: IDate_, weight: number, private bmiService:BmiService) {
    this.date = date;
    this.weight = weight;
    bmiService.
  }
}
