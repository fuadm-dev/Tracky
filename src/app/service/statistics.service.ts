import { Injectable } from '@angular/core';
import { BmiService } from './bmi.service';
import { User } from '../shared/models/user';
import { Statistics } from '../shared/models/statistics';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  stats: Statistics;

  constructor(private bmiService: BmiService) {}

  getStatistics(user: User): Statistics {
    return this.stats;
  }

  setStartWeight(user: User) {
    this.stats.startWeight = user.start.weight;
  }

  setCurrentWeight(user: User) {
    if (user.record.weightLogs.length > 0) {
      user.current = user.record.weightLogs[user.record.weightLogs.length - 1];
    } else {
      user.current = user.start;
    }
  }

  setTargetWeight(user: User) {
    this.stats.targetWeight = user.target.weight;
  }

  calcPredictedWeight(user: User) {
    // lossRate = (startWeight - currentWeight) / weeksLeft
    // predictedWeight = currentWeight - (lossRate * weeksLeft)
  }

  calcBmi(user: User) {}

  calcChangeBmi(user: User) {}

  calcChangeWeight(user: User) {}

  calcTime(user: User) {}

  calcProgress(user: User) {}

  calcOntarget(user: User) {}
}
