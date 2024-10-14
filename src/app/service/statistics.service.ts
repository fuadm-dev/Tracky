import { Injectable } from '@angular/core';
import { BmiService } from './bmi.service';
import { User } from '../shared/models/user';
import { StatsClass } from '../shared/models/stats-class';
import { _Date } from '../shared/models/_date';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  stats: StatsClass = new StatsClass();

  constructor(private bmiService: BmiService) {}

  buildStats(user: User): StatsClass {
    this.setStartWeight(user);
    this.setCurrentWeight(user);
    this.setTargetWeight(user);
    // this.calcPredictedWeight(user);
    // this.calcChangeWeight(user);
    // this.calcTime(user);
    // this.calcProgress(user);
    // this.calcOntarget(user);
    // this.calcBmi(user);
    // this.calcChangeBmi(user);

    return this.stats;
  }

  setStartWeight(user: User) {
    this.stats.startWeight = user.start.weight;
  }

  setCurrentWeight(user: User) {
    if (user.record.weightLogs.length > 0) {
      user.current = user.record.weightLogs[user.record.weightLogs.length - 1];
      this.stats.currentWeight = user.current.weight;
    } else {
      user.current = user.start;
      this.stats.currentWeight = user.current.weight;
    }
  }

  setTargetWeight(user: User) {
    this.stats.targetWeight = user.target.weight;
  }

  calcPredictedWeight(user: User) {
    // predictedWeight = currentWeight - (lossRate * weeksLeft)
  }

  calcProgressMade(user: User) {
    // % progressMade = weightChange / (startWeight - targetWeight) * 100
  }

  calcOntarget(user: User) {
    // expectedLossRate = (startWeight - targetWeight) / targetTime
    // onTarget = expectedLossRate >= actualLossRate

    // return onTarget
  }

  calcTimeFromToday(today: _Date, later: _Date) {
    //daysSinceToday = today - later
    //weeksSinceToday = daysSinceDate / 7

    // build time{days: daysSinceToday, weeks: weeksSinceToday}

    // return time{}
  }

  calcLossRate(user: User) {
    // actualLossRate = (startWeight - currentWeight) / weeksTotarget
  }

  calcChange(start: number, current: number) {
    // changeWeight = startWeight - currentWeight
    // changeBmi = startBmi - currentBmi

    // return change
  }

  calcBmi(user: User) {
    //
  }
}
