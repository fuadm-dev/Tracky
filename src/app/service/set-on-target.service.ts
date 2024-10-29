import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class SetOnTargetService {
  user: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  setOnTargetValue() {
    let onTarget = {
      isOnTarget: true,
      message: '',
    };

    this.user.userStats.onTarget = this.user.userStats.onTarget;
    console.log(this.user.userStats);

    if (this.user.userStats.onTarget) {
      onTarget.message = 'On Target!';
    } else onTarget.message = 'Off Target!';
  }
}
