import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { StatisticsService } from './statistics.service';

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
      date: {
        day: 30,
        month: 'May',
        year: 2024,
      },
      weight: 107.2,
    },
    current: {
      date: {
        day: 30,
        month: 'May',
        year: 2024,
      },
      weight: 107.2,
    },
    target: {
      date: {
        day: 30,
        month: 'May',
        year: 2024,
      },
      weight: 107.2,
    },
    record: {
      id: 1320,
      weightLogs: [
        {
          date: {
            day: 30,
            month: 'May',
            year: 2024,
          },
          weight: 107.2,
        },
      ],
      isHistory: false,
    },
    userStats: {
      startWeight: 0,
      currentWeight: 0,
      targetWeight: 0,
      predictedWeight: 0,
      lossRate: 0,
      weeksLeft: 0,
      changeWeight: 0,
      changeBmi: 0,
      onTarget: false,
      percentProgress: 0,
      percentTime: 0,
    },
    history: [
      {
        id: 1321,
        weightLogs: [
          {
            date: {
              day: 30,
              month: 'May',
              year: 2024,
            },
            weight: 107.2,
          },
        ],
        isHistory: false,
      },
      {
        id: 1322,
        weightLogs: [
          {
            date: {
              day: 30,
              month: 'May',
              year: 2024,
            },
            weight: 107.2,
          },
        ],
        isHistory: false,
      },
    ],
  };

  getUser(): User {
    // this.user.userStats = this.statsService.buildStats(this.user);
    console.log(this.user);
    return this.user;
  }
}
