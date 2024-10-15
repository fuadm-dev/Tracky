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
    this.setStartWeight(user.start.weight);
    this.setCurrentWeight(user);
    this.setTargetWeight(user.target.weight);

    return this.stats;
  }

  // Set Start Weight
  setStartWeight(weight: number) {
    this.stats.startWeight = weight;
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

  // Set Target Weight
  setTargetWeight(weight: number) {
    this.stats.targetWeight = weight;
  }

  // Set Predicted Weight
  calcPredictedWeight(user: User) {
    user.userStats.
    // predictedWeight = currentWeight - (actualLossRate * weeksTotarget)
    // return predictedWeight
  }

  calcProgressMade(
    weightChange: number,
    firstWeight: number,
    secondWeight: number
  ) {
    // % progressMade = weightChange / (startWeight - targetWeight) * 100
    // return progressMade
  }

  calcLossRate(firstWeight: number, secondWeight: number) {
    // actualLossRate = (startWeight - currentWeight) / timeFromStart
    // expectedLossRate = (startWeight - targetWeight) / weeksTotarget
    // return rate
  }

  calcOntarget(expectedLossRate: number, actualLossRate: number) {
    // onTarget = expectedLossRate >= actualLossRate
    // return onTarget
  }

  calcTimeFromToday(today: _Date, later: _Date) {
    //daysSinceToday = today - later
    //weeksSinceToday = daysSinceDate / 7
    // build time{days: daysSinceToday, weeks: weeksSinceToday}
    // return time{}
  }

  calcChange(firstWeight: number, secondWeight: number) {
    // changeWeight = startWeight - currentWeight
    // changeBmi = startBmi - currentBmi
    // return change
  }
}
