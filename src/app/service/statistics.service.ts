import { Injectable } from '@angular/core';
import { BmiService } from './bmi.service';
import { User } from '../shared/models/user';
import { StatsClass } from '../shared/models/stats-class';
import { IDate_ } from '../shared/models/_date';
import { CurrentDateService } from './current-date.service';
import { Weight } from '../shared/models/weight';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  stats: StatsClass = new StatsClass();

  constructor(
    private bmiService: BmiService,
    private currentDate: CurrentDateService
  ) {}

  buildStats(user: User): StatsClass {
    this.setStartWeight(user.start.weight);
    this.setCurrentWeight(user);
    this.setTargetWeight(user);
    this.setStart(user);
    // this.calcPredictedWeight(user);
    return this.stats;
  }

  // Set StartStats
  setStartStats(user: User) {
    user.userStats.start = user.start;
  }

  // Set TargetStats
  setTarget(user: User) {
    user.userStats.target = user.target;
  }


  // Calculate BMI
  calcBmi(weight: number, height: number) {
  }

  // Calculate Start BMI Status
  calcStartBMIStatus(bmi: number) {
    
  }

  // Set Targe Date
  setTargetDate(date: IDate_) {
    this.stats.startDate = date;
  }

  // Set Target Weight
  setTargetWeight(user: User) {
    this.stats.targetWeight = user.target.weight;
  }

  // Set Current Weight
  setCurrentWeight(user: User) {
    if (user.record.weightLogs.length > 0) {
      user.current = user.record.weightLogs[user.record.weightLogs.length - 1];
      this.stats.currentWeight = user.current.weight;
    } else {
      user.current = user.start;
      this.stats.currentWeight = user.current.weight;
    }
  }

  // Calculate Time From Start Date
  calcTimeFromStartDate(weight: number) {
    this.stats.targetWeight = weight;
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
    // Set Actual Weightloss Rate
    user.userStats.actualLossRate =
      (user.userStats.startWeight - user.userStats.currentWeight) /
      user.userStats.timeFromStart.weeks;

    // Set Expected Weightloss Rate
    user.userStats.expectedLossRate =
      (user.userStats.startWeight - user.userStats.targetWeight) /
      user.userStats.timeFromStart.weeks;
  }

  // Set Predicted Weight
  calcPredictedWeight(user: User) {
    user.userStats.predictedWeight =
      user.userStats.currentWeight -
      user.userStats.actualLossRate * user.userStats.timeToTarget.weeks;
  }

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
