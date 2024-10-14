import { Injectable } from '@angular/core';
import { BmiService } from './bmi.service';
import { User } from '../shared/models/user';
import { StatsClass } from '../shared/models/stats-class';

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

  calcDaysSinceStart(user: User) {
    //daysSinceStart = dateToday - startDate
  }

  calcWeeksSinceStart(user: User) {
    //weeksSinceStart = (dateToday - startDate) / 7
  }

  calcWeeksLeft(user: User) {
    //weeksToTarget = dateToday - startDate
  }

  calcLossRate(user: User) {
    // actualLossRate = (startWeight - currentWeight) / weeksTotarget
  }

  calcWeightChange(user: User) {
    // changeWeight = startWeight - currentWeight
  }

  calcChangeBmi(user: User) {
    // changeBmi = startBmi - currentBmi
  }

  calcProgressMade(user: User) {
    // progressMade = changetWeight / (startWeight - targetWeight) * 100
  }

  calcOntarget(user: User) {
    // expectedLossRate = (startWeight - targetWeight) / targetTime
    // onTarget = expectedLossRate >= actualLossRate
  }

  calcAllBmi(user: User) {
    //
  }
}
