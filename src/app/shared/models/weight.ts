import { IDate_ } from './_date';

export class Weight {
  date: IDate_;
  weight: number = 0;

  constructor(date: IDate_, weight: number) {
    this.date = date;
    this.weight = weight;
  }
}
