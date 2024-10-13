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

  buildStatistics(user: User): Statistics {
    this.stats.startWeight = user.start.weight;
    this.stats.targetWeight = user.target.weight;
    this.stats.predictedWeight;
    this.setCurrentWeight(user);
    return this.stats;
  }

  setCurrentWeight(user: User) {
    if (user.record.weightLogs.length > 0) {
      user.current = user.record.weightLogs[user.record.weightLogs.length - 1];
    } else {
      user.current = user.start;
    }
  }

  setStartWeight(){}

  setTargetWeight(){}

  calcPredictedWeight(user: User) {}
  calcBmi(user: User) {}
  calcChangeBmi(user: User) {}
  calcChangeWeight(user: User) {}
  calcTime(user: User) {}
  calcProgress(user: User) {}
  calcOntarget(user: User) {}
}
