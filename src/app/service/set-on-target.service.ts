import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root',
})
export class SetOnTargetService {
  constructor(private dateService:DateService) {}

  setOnTargetValue(user: User) {
    let target = user.userStats.target;
    let expectedWeightLoss =
      user.userStats.lossRate.expected * user.userStats.elapsedTime.weeks;
    let expectedWeight = user.start.weight - expectedWeightLoss;

    user.userStats.elapsedTime = this.dateService.calcElapsedTime(
      user.userStats.target.date,
      user.userStats.current.date
    );
    
    user.userStats.elapsedTime = this.dateService.calcElapsedTime(
      user.userStats.target.date,
      user.userStats.current.date
    );
    
    target.offTargetBy =
    Math.round((user.userStats.current.weight - expectedWeight) * 10) / 10;
    
    target.isOnTarget =
    user.userStats.current.weight <= expectedWeight;
    
    if (target.isOnTarget) {
      target.message = 'On Target';
    } else target.message = 'Off Target by';
    
  }
}
