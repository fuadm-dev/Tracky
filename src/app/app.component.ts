import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './shared/models/user';
import { DateService } from './service/date.service';
import { IDate_ } from './shared/models/_date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: User;
  onTarget: boolean;
  onTargetMessage: string;
  currentDate: string;

  constructor(
    private userService: UserService,
    private dateService: DateService
  ) {}
  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.setOnTarget();
    this.currentDate = this.dateService.setCurrentDate();
  }

  setOnTarget() {
    let onTarget = this.user.userStats.onTarget;
    this.onTarget = onTarget;
    if (onTarget) {
      this.onTargetMessage = 'On Target!';
    } else this.onTargetMessage = 'Off Target!';
  }
}
