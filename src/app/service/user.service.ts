import { Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    id: 1001,
    userName: 'fuad',
    email: 'fuad.yusuf1@gmail.com',
    password: 'fuad123',
    height: 180,
    gender: 'male',
    dob: '15/01/1980',
    start: {
      date: '01/10/2024',
      weight: 118.2,
      bmi: 0,
      bmiStatus: '',
    },
    target: {
      targetDate: '01/01/2025',
      targetWeight: 100,
      targetBMI: 30,
    },
    record: {
      id: 1320,
      weightLogs: [
        {
          id: 1220,
          date: '04/10/2024',
          weight: 107.2,
          bmi: 26,
        },
      ],
      isHistory: false,
    },
    history: [],
  };

  private setStartBmiStatus() {
    if (this.user.start.bmi) {
      if (this.user.start.bmi < 16.5) {
        this.user.start.bmiStatus = 'very underweight';
      } else if (this.user.start.bmi >= 16.5 && this.user.start.bmi < 18.5) {
        this.user.start.bmiStatus = 'underweight';
      } else if (this.user.start.bmi >= 18.5 && this.user.start.bmi <= 24.9) {
        this.user.start.bmiStatus = 'healthy';
      } else if (this.user.start.bmi >= 25 && this.user.start.bmi <= 29.9) {
        this.user.start.bmiStatus = 'overweight';
      } else if (this.user.start.bmi >= 30 && this.user.start.bmi <= 39.9) {
        this.user.start.bmiStatus = 'obese';
      } else this.user.start.bmiStatus = 'very obese';
    }
  }

  private setStartBmi() {
    const bmi = this.user.height / Math.sqrt(this.user.height);
    
    console.log(this.user.height / Math.sqrt(this.user.height));
  }

  getUser(): User {
    this.setStartBmi();
    this.setStartBmiStatus();
    return this.user;
  }
}
