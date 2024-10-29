import { Injectable, OnInit } from '@angular/core';
import { Weight } from '../shared/models/weight';
import { UserService } from './user.service';
import { User } from '../shared/models/user';
import { BmiService } from './bmi.service';
import { StatisticsService } from './statistics.service';

@Injectable({
  providedIn: 'root',
})
export class InputService implements OnInit {
  user: User;
  height: number;

  constructor(
    private userService: UserService,
    private bmiService: BmiService,
    private statsService: StatisticsService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.height = this.user.height;
  }

  logWeight(weightInput: Weight, user: User) {
    if (weightInput) {
      this.resetBmi(weightInput)
      this.updateUserRecord(user, weightInput);
      this.resetStatistics(user);
    }
  }

  updateUserRecord(user:User, weight: Weight) {
    user.record.weightLogs.push(weight);
  }

  resetBmi(input: Weight) {
    input.bmi = this.bmiService.getBmi(input.weight, this.height);
  }

  resetStatistics(user: User) {
    this.statsService.buildStats(user);
  }
}
