import { Injectable } from '@angular/core';
import { IBmi } from '../shared/models/bmi';
import { User } from '../shared/models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})

export class BmiService {
  user: User;
  constructor(private userService:UserService) {
    this.user = userService.getUser();
  }

  getBmi(weight: number): IBmi {
    let bmi: IBmi;
    bmi.bmi = this.calcBmi(weight);
    bmi.bmiStatus = this.calcBmiStatus(bmi.bmi);

    return bmi;
  }

  calcBmi(weight: number): number {
    const bmi = weight / Math.pow(this.user.height / 100, 2);
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
