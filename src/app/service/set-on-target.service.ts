import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class SetOnTargetService {
  constructor() {}

  setOnTargetValue(user: User) {
    let expectedLoss =
      user.userStats.lossRate.expected * user.userStats.elapsedTime.weeks;

    let expectedWeight = user.start.weight - expectedLoss;

    user.userStats.target.offTargetBy =
      Math.round((user.userStats.current.weight - expectedWeight) * 10) / 10;

    user.userStats.target.isOnTarget =
      user.userStats.current.weight <= expectedWeight;

    if (user.userStats.target.isOnTarget) {
      user.userStats.target.message = 'On Target';
    } else user.userStats.target.message = 'Off Target by';

  }
}
