import { Injectable, OnInit } from '@angular/core';
import { BmiService } from './bmi.service';
import { User } from '../shared/models/user';
import { Statistics } from '../shared/models/statistics';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService implements OnInit {
  constructor(private bmiService: BmiService) {}

  ngOnInit(): void {}

  buildStatistics(user: User): Statistics {
    let stats: Statistics;
    stats.startWeight = user.start.weight;
    stats.targetWeight = user.target.weight;
    stats.predictedWeight;
    this.setCurrentWeight(user);
    return stats;
  }

  setCurrentWeight(user: User) {
    if (user.record.weightLogs.length > 0) {
      user.current = user.record.weightLogs[user.record.weightLogs.length - 1];
    } else {
      user.current = user.start;
    }
  }

  calcPredictedWeight(user: User) {}
  calcBmi(user: User) {}
  calcChangeBmi(user: User) {}
  calcChangeWeight(user: User) {}
  calcTime(user: User) {}
  calcProgress(user: User) {}
  calcOntarget(user: User) {}
}
