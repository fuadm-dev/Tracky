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
      weight: 118.2,
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
      isOnTarget: false,
      offTargetBy: 0,
      message: '',
    },
    change: new Change(),
    record: {
      id: 1320,
      weightLogs: [
        {
          date: new Date(2024, 6, 1),
          weight: 118.5,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 6, 8),
          weight: 119,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 4, 1),
          weight: 119,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 5, 8),
          weight: 119,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 5, 1),
          weight: 118.5,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 6, 1),
          weight: 118,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 6, 14),
          weight: 119,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 7, 10),
          weight: 119,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 7, 1),
          weight: 116,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 8, 1),
          weight: 114,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 8, 10),
          weight: 119,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 4, 9),
          weight: 119,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 9, 20),
          weight: 113,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 9, 27),
          weight: 105.5,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 10, 1),
          weight: 114,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 10, 2),
          weight: 105,
          bmi: {
            bmi: 0,
            bmiStatus: '',
          },
        },
        {
          date: new Date(2024, 10, 2),
          weight: 105,
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
            date: new Date(2024, 9, 20),
            weight: 108,
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
            weight: 109.2,
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
