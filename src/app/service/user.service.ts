import { Injectable } from '@angular/core';
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
      date: {
        day: 30,
        month: 'May',
        year: 2024
      },
      weight: 107.2,
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
          date: {
            day: 
          }
          weight: 107.2,
          bmi: 26,
        },
      ],
      isHistory: false,
    },
    history: [],
  };

  getUser(): User {
    return this.user;
  }
}
