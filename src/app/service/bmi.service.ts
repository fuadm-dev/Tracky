import { Injectable } from '@angular/core';
import { IBmi } from '../shared/models/bmi';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class BmiService {
  user: User;
  constructor() {}

  getBmi(weight: number, hight: number): IBmi {
    let bmi: IBmi = {
      bmi: 0,
      bmiStatus: ''
    };
    
    bmi.bmi = this.calcBmi(weight, hight);
    bmi.bmiStatus = this.calcBmiStatus(bmi.bmi);
    return bmi;
  }

  calcBmi(weight: number, height: number): number {
    const bmi = weight / Math.pow(height / 100, 2);
    return Math.round(bmi * 10) / 10;
  }

  calcBmiStatus(bmi: number): string {
    if (bmi) {
      if (bmi < 16.5) {
        return 'very underweight';
      } else if (bmi >= 16.5 && bmi < 18.5) {
        return 'underweight';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'healthy';
      } else if (bmi >= 25 && bmi <= 29.9) {
        return 'overweight';
      } else if (bmi >= 30 && bmi <= 35) {
        return 'class 1 obese';
      } else if (bmi >= 35 && bmi <= 40) {
        return 'class 2 obese';
      } else return 'class 3 obese';
    }
    return '';
  }
}
