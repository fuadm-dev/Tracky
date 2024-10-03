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
    height: '180',
    gender: 'male',
    dob: '15/01/1980',
    start: {
      startDate: '01/10/2024',
      startWeight: 107.2,
      startBMI: 34,
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
          bmi: 34,
        },
      ],
      isHistory: false,
    },
    history: [],
  };

  // Create dashboard items
  

  getUser(): User{
    return this.user;
  }
}
