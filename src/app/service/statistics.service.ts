import { Injectable } from '@angular/core';
import { BmiService } from './bmi.service';
import { User } from '../shared/models/user';
import { StatsClass } from '../shared/models/stats-class';
import { _Time } from '../shared/models/_time';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  stats: StatsClass = new StatsClass();

  constructor(
    private bmiService: BmiService,
    private dateService: DateService
  ) {}

  buildStats(user: User): StatsClass {
    this.setStartStats(user);
    this.setTarget(user);
    this.calcLossRate(user); //
    this.setUserHeight(user);
    this.setCurrentWeight(user);
    this.calcTimes(user);
    this.calcChange(user);
    this.calcPredictedWeight(user);
    this.calcProgressMade(user);
    this.calcOntarget(user);

    return user.userStats;
  }

  //Set Height
  setUserHeight(user: User) {
    user.userStats.height = user.height;
  }

  // Set StartStats
  setStartStats(user: User) {
    user.userStats.start = user.start;
    user.userStats.start.bmi = this.bmiService.getBmi(
      user.userStats.start.weight,
      user.height
    );
  }

  // Set TargetStats
  setTarget(user: User) {
    // console.log(user.target);
    user.userStats.target = user.target;
    user.userStats.target.bmi = this.bmiService.getBmi(
      user.userStats.target.weight,
      user.height
    );
  }

  // Set CurrentStats
  setCurrentWeight(user: User) {
    if (user.record.weightLogs.length == 0) {
      user.current = user.start;
      user.userStats.current = user.start;
    } else {
      user.current = user.record.weightLogs[user.record.weightLogs.length - 1];
      user.userStats.current = user.current;
      user.userStats.current.bmi = this.bmiService.getBmi(
        user.userStats.current.weight,
        user.height
      );
    }
  }

  // Calculate Total Time
  calcTimes(user: User) {
    // Calculate Total Time
    user.userStats.totalTime = this.dateService.calcElapsedTime(
      user.target.date,
      user.userStats.start.date
    );

    // Calculate Elapsed Time
    user.userStats.elapsedTime = this.dateService.calcElapsedTime(
      user.current.date,
      user.userStats.start.date
    );

    // Calculate Remaining Time
    user.userStats.remainingTime = this.dateService.calcElapsedTime(
      user.target.date,
      user.userStats.current.date
    );

  }

  // Calculate Weightloss Rate
  calcLossRate(user: User) {
    // Expected Weightloss Rate
    user.userStats.lossRate.expected =
      Math.round(
        ((user.userStats.start.weight - user.userStats.target.weight) /
          user.userStats.totalTime.weeks) *
          10
      ) / 10;

    // Actual Weightloss Rate
    user.userStats.lossRate.actual =
      (user.userStats.start.weight - user.userStats.current.weight) /
      user.userStats.elapsedTime.weeks;
  }

  // Calculate Predicted Weight
  calcPredictedWeight(user: User) {
    user.userStats.predicted.weight =
      user.userStats.current.weight -
      user.userStats.lossRate.actual * user.userStats.remainingTime.weeks;
    // set predicted BMI
    user.userStats.predicted.bmi = this.bmiService.getBmi(
      user.userStats.predicted.weight,
      user.height
    );
  }

  // Calculate Changes
  calcChange(user: User) {
    // calc Weight change
    user.userStats.change.weightChange =
      Math.ceil(
        (user.userStats.start.weight - user.userStats.current.weight) * 10
      ) / 10;

    // calc BMI change
    user.userStats.change.bmiChange =
      Math.ceil(
        (user.userStats.start.bmi.bmi - user.userStats.current.bmi.bmi) * 10
      ) / 10;
  }

  // Calculate Progress Made
  calcProgressMade(user: User) {
    user.userStats.pctProgress = Math.ceil(
      (user.userStats.change.weightChange /
        (user.userStats.start.weight - user.userStats.target.weight)) *
        100
    );
  }

  // Calculate Ontarget
  calcOntarget(user: User) {
    user.userStats.onTarget =
      user.userStats.lossRate.actual >= user.userStats.lossRate.expected;
  }
}
