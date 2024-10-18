import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { StatsClass } from 'src/app/shared/models/stats-class';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'dash-item',
  templateUrl: './dash-item.component.html',
  styleUrls: ['./dash-item.component.css'],
})
export class DashItemComponent {
  title: string = 'Start';
  @Input() weight: number;
  @Input() height: number;
  @Input() date: Date;
  calendar: boolean;
  bmiComponent: boolean;
  user: User;
  userStats: StatsClass;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
    this.userStats = this.userService.getUser().userStats;
  }
}
