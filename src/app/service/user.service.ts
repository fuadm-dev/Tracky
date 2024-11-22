import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { StatsClass } from '../shared/models/stats-class';
import { Change } from '../shared/models/change';
import { BmiService } from './bmi.service';
import { DateService } from './date.service';
import { SetOnTargetService } from './set-on-target.service';
import { Weight } from '../shared/models/weight';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private bmiService: BmiService,
    private dateService: DateService,
    private setOnTarget: SetOnTargetService
  ) {}

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
          weight: 104,
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
  stats: StatsClass = new StatsClass();
  dateToday: Date = new Date();

  public getUser(): User {
    this.buildStats(this.user);
    return this.user;
  }

  private buildStats(user: User): StatsClass {
    this.setUserHeight(user);
    this.setStartStats(user);
    this.calcBMIForRecord(user);
    this.setTarget(user);
    this.calcLossRate(user);
    this.setCurrentWeight(user);
    this.calcTimes(user);
    this.calcChange(user);
    this.calcPredictedWeight(user);
    this.calcProgressMade(user);
    this.calcOntarget(user);

    return user.userStats;
  }

  //Set Height
  private setUserHeight(user: User) {
    user.userStats.height = user.height;
  }

  // Set StartStats
  private setStartStats(user: User) {
    user.userStats.start = user.start;
    user.userStats.start.bmi = this.bmiService.getBmi(
      user.userStats.start.weight,
      user.height
    );
  }

  // Set TargetStats
  private setTarget(user: User) {
    // console.log(user.target);
    user.userStats.target = user.target;
    user.userStats.target.bmi = this.bmiService.getBmi(
      user.userStats.target.weight,
      user.height
    );
  }

  // Set CurrentStats
  private setCurrentWeight(user: User) {
    if (user.record.weightLogs.length == 0) {
      user.userStats.current = user.start;
    } else {
      user.record.weightLogs = user.record.weightLogs.sort(
        (a: any, b: any) => a.date - b.date
      );
      const latestLog: Weight =
        user.record.weightLogs[user.record.weightLogs.length - 1];

      user.userStats.current = latestLog;

      user.userStats.current.bmi = this.bmiService.getBmi(
        user.userStats.current.weight,
        user.height
      );
    }
  }

  // Calculate Total Times
  private calcTimes(user: User) {
    // Calculate Total Time
    user.userStats.totalTime = this.dateService.calcElapsedTime(
      user.target.date,
      user.userStats.start.date
    );

    // Calculate Elapsed Time
    user.userStats.elapsedTime = this.dateService.calcElapsedTime(
      this.dateToday,
      user.userStats.start.date
    );

    // Calculate Remaining Time
    user.userStats.remainingTime = this.dateService.calcElapsedTime(
      this.dateToday,
      user.userStats.target.date
    );
  }

  // Calculate Weightloss Rate
  private calcLossRate(user: User) {
    // Expected Weightloss Rate
    user.userStats.lossRate.expected =
      Math.round(
        ((user.userStats.start.weight - user.userStats.target.weight) /
          user.userStats.totalTime.weeks) *
          10
      ) / 10;

    // Actual Weightloss Rate
    if (user.userStats.current.weight - user.userStats.start.weight == 0) {
      user.userStats.lossRate.actual = 0;
    } else {
      user.userStats.lossRate.actual =
        (user.userStats.start.weight - user.userStats.current.weight) /
        user.userStats.elapsedTime.weeks;
    }
  }

  // Calculate Predicted Weight
  private calcPredictedWeight(user: User) {
    const predictedLossByTargetDate: number =
      user.userStats.lossRate.actual * user.userStats.remainingTime.weeks;

    user.userStats.predicted.weight = Math.round(
      user.userStats.current.weight - predictedLossByTargetDate
    );

    // set predicted BMI
    user.userStats.predicted.bmi = this.bmiService.getBmi(
      user.userStats.predicted.weight,
      user.height
    );

    // set predicted Date
    user.userStats.predicted.date = user.userStats.target.date;
  }

  // Calculate Changes
 private calcChange(user: User) {
    // calc Weight change
    if (user.userStats.current.weight - user.userStats.start.weight == 0) {
      user.userStats.change.weightChange == 0;
    } else {
      user.userStats.change.weightChange =
        Math.ceil(
          (user.userStats.current.weight - user.userStats.start.weight) * 10
        ) / 10;
    }

    // calc BMI change
    user.userStats.change.bmiChange =
      Math.ceil(
        (user.userStats.current.bmi.bmi - user.userStats.start.bmi.bmi) * 10
      ) / 10;
  }

  // Calculate Progress Made
 private calcProgressMade(user: User) {
    if (user.userStats.change.weightChange == 0) {
      user.userStats.pctProgress = 0;
    } else {
      user.userStats.pctProgress = Math.ceil(
        ((user.userStats.change.weightChange * -1) /
          (user.userStats.start.weight - user.userStats.target.weight)) *
          100
      );
    }
  }

  // Calculate Ontarget
 private calcOntarget(user: User) {
    this.setOnTarget.setOnTargetValue(user);
  }

  // Calculate BMI
 private calcBMIForRecord(user: User) {
    user.record.weightLogs.forEach((log) => {
      log.bmi.bmi = this.bmiService.calcBmi(log.weight, user.height);
      log.bmi.bmiStatus = this.bmiService.calcBmiStatus(log.bmi.bmi);
    });
  }
}
