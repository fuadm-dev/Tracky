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

  constructor(
    private userService: UserService,
    private bmiService: BmiService,
    private statsService: StatisticsService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  logWeight(weightInput: Weight, user: User) {
    weightInput.bmi = this.bmiService.getBmi(weightInput.weight, user.height);
    
    user.record.weightLogs.push(weightInput);
    this.statsService.buildStats(user);
  }
}
