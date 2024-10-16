import { Injectable } from '@angular/core';
import { BmiService } from './bmi.service';
import { User } from '../shared/models/user';
import { StatsClass } from '../shared/models/stats-class';
import { _Time } from '../shared/models/_time';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  stats: StatsClass = new StatsClass();

  constructor(
    private bmiService: BmiService,
  ) {}

  buildStats(user: User): StatsClass {
    return user.userStats;
  }

  // Set StartStats
  setStartStats(user: User) {
    user.userStats.start = user.start;
    user.userStats.start.bmi = this.bmiService.getBmi(
      user.userStats.start.weight
    );
  }

  // Set TargetStats
  setTarget(user: User) {
    user.userStats.target = user.target;
    user.userStats.target.bmi = this.bmiService.getBmi(
      user.userStats.target.weight
    );
  }

  // Set CurrentStats
  setCurrentWeight(user: User) {
    if (user.record.weightLogs.length > 0) {
      user.current = user.record.weightLogs[user.record.weightLogs.length - 1];
      user.userStats.current.bmi = this.bmiService.getBmi(
      user.userStats.current.weight)
    } else {
      user.current = user.start;
    }
  }

  // Calculate Times
  calcTotalTime(user: User) {
    user.userStats.totalTime = new _Time(
      user.start.date.day,
      user.target.date.day
    );
  }

  calcTimeFromToday(user: User) {
    //Set Time From Start Date To Today
    user.userStats.timeFromStart.days;

    //Set Total Time From Start Date To Target Date
    user.userStats.totalTimeFrame.days =
      user.userStats.targetWeight - user.userStats.startWeight;
    user.userStats.totalTimeFrame.weeks = user.userStats.targetWeight / 7;

    //Set Total Time From Today To Target Date
    user.userStats.currentTimeFrame;

    //daysSinceToday = today - later
    //weeksSinceToday = daysSinceDate / 7
    // build time{days: daysSinceToday, weeks: weeksSinceToday}
    // return time{}
  }

  // Calculate Weightloss Rate
  calcLossRate(user: User) {
    // Expected Weightloss Rate
    user.userStats.lossRate.expected =
      (user.userStats.start.weight - user.userStats.target.weight) /
      user.userStats.totalTime.weeks;

    // Actual Weightloss Rate
    user.userStats.lossRate.actual =
      (user.userStats.start.weight - user.userStats.current.weight) /
      user.userStats.expiredTime.weeks;

  }

  // Calculate Predicted Weight
  calcPredictedWeight(user: User) {
    user.userStats.predicted.weight =
      user.userStats.current.weight -
      user.userStats.lossRate.actual * user.userStats.remainingTime.weeks;
      // set predicted BMI
      user.userStats.predicted.bmi = this.bmiService.getBmi(
        user.userStats.predicted.weight
      );
  }

  // Calculate Progress Made
  calcProgressMade(
    weightChange: number,
    firstWeight: number,
    secondWeight: number
  ) {
    // % progressMade = weightChange / (startWeight - targetWeight) * 100
    // return progressMade
  }

  calcOntarget(expectedLossRate: number, actualLossRate: number) {
    // onTarget = expectedLossRate >= actualLossRate
    // return onTarget
  }

  calcChange(firstWeight: number, secondWeight: number) {
    // changeWeight = startWeight - currentWeight
    // changeBmi = startBmi - currentBmi
    // return change
  }
}
