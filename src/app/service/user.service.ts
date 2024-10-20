import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { StatisticsService } from './statistics.service';
import { StatsClass } from '../shared/models/stats-class';
import { Change } from '../shared/models/change';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private statsService: StatisticsService) {}

  user: User = {
    id: 1001,
    userName: 'fuad',
    email: 'fuad.yusuf1@gmail.com',
    password: 'fuad123',
    height: 180,
    gender: 'male',
    dob: '15/01/1980',
    start: {
      date: new Date(2024, 6, 1),
      weight: 108.2,
      bmi: {
        bmi: 0,
        bmiStatus: '',
      },
    },
    current: {
      date: new Date(),
      weight: 107.2,
      bmi: {
        bmi: 0,
        bmiStatus: '',
      },
    },
    target: {
      date: new Date(2025, 0, 1),
      weight: 100,
      bmi: {
        bmi: 0,
        bmiStatus: '',
      },
    },
    change: new Change(),
    record: {
      id: 1320,
      weightLogs: [
        {
          date: new Date(2024, 9, 18),
          weight: 119.2,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
      ],
      isHistory: false,
    },
    userStats: new StatsClass(),
    history: [
      {
        id: 1321,
        weightLogs: [
          {
            date: new Date(2024, 9, 18),
            weight: 107.2,
            bmi: {
              bmi: 0,
              bmiStatus: '',
            },
          },
        ],
        isHistory: false,
      },
      {
        id: 1322,
        weightLogs: [
          {
            date: new Date(2024, 9, 20),
            weight: 107.2,
            bmi: {
              bmi: 0,
              bmiStatus: '',
            },
          },
        ],
        isHistory: false,
      },
    ],
  };

  getUser(): User {
    this.user.userStats = this.statsService.buildStats(this.user);
    return this.user;
  }
}
