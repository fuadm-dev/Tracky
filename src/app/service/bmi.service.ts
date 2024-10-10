import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class BmiService {
  setBmi(user: User) {
    const bmi = user.start.weight / Math.pow(user.height / 100, 2);
    user.start.bmi = Math.round(bmi * 10) / 10;
  }

  setBmiStatus(user: User) {
    if (user.start.bmi) {
      if (user.start.bmi < 16.5) {
        user.start.bmiStatus = 'very underweight';
      } else if (user.start.bmi >= 16.5 && user.start.bmi < 18.5) {
        user.start.bmiStatus = 'underweight';
      } else if (user.start.bmi >= 18.5 && user.start.bmi <= 24.9) {
        user.start.bmiStatus = 'healthy';
      } else if (user.start.bmi >= 25 && user.start.bmi <= 29.9) {
        user.start.bmiStatus = 'overweight';
      } else if (user.start.bmi >= 30 && user.start.bmi <= 39.9) {
        user.start.bmiStatus = 'obese';
      } else user.start.bmiStatus = 'very obese';
    }
  }
}
