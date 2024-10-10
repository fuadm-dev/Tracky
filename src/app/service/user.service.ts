import { Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { BmiService } from './bmi.service';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
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

  constructor(private bmiService: BmiService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private calcStart() {}

  getUser(): User {
    return this.user;
  }
}
