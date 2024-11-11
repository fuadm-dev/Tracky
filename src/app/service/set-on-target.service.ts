import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class SetOnTargetService {
  constructor() {}

  setOnTargetValue(user: User) {
    user.userStats.target.offTargetBy = 100;

    user.userStats.target.isOnTarget =
      user.userStats.lossRate.actual >= user.userStats.lossRate.expected;

    if (user.userStats.target.isOnTarget) {
      user.userStats.target.message = 'On Target';
    } else user.userStats.target.message = 'Off Target';

  }
}
