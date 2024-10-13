import { Injectable, OnInit } from '@angular/core';
import { BmiService } from './bmi.service';
import { User } from '../shared/models/user';
import { Statistics } from '../shared/models/statistics';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService implements OnInit {
  user: User;

  constructor(private userService: UserService, private bmiService: BmiService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  buildStatistics(user): Statistics {
    let stats: Statistics;
    stats.startWeight = user.start.weight;
    stats.targetWeight = user.target.weight;
    stats.predictedWeight;
    this.setCurrentWeight(user);
    return stats;
  }

  setCurrentWeight(user) {
    if (user.record.weightLogs.length > 0) {
      user.current = user.record.weightLogs[user.record.weightLogs.length - 1];
    } else {
      user.current = user.start;
    }
  }

  calcPredictedWeight(user) {}
  calcBmi(user) {}
  calcChangeBmi(user) {}
  calcChangeWeight(user) {}
  calcTime(user) {}
  calcProgress(user) {}
  calcOntarget(user) {}
}
