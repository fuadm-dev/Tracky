import { Injectable } from '@angular/core';
import { Bmi } from '../shared/models/bmi';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class BmiService {
  bmiArr: Bmi[];

  calcUserBmi(user: User): Bmi {
    let bmi: Bmi;

    bmi.bmi = this.calcBmi(user.start.weight, user.height);
    bmi.bmiStatus = this.calcBmiStatus(bmi.bmi);

    return bmi
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
      } else if (bmi >= 30 && bmi <= 39.9) {
        return 'obese';
      } else return 'very obese';
    }
    return '';
  }
}
