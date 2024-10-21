import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { StatsClass } from 'src/app/shared/models/stats-class';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'change-item',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css'],
})
export class ChangeComponent {
  @Input() units: string = 'kg';
  @Input() title: string = '';
  @Input() weight: number;
  @Input() height: number;
  @Input() date: Date;
  @Input() calendar: boolean = true;
  @Input() bmiComponent: boolean = true;
  showBmiStatus: boolean = false;

  user: User;
  userStats: StatsClass;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
    this.userStats = this.userService.getUser().userStats;
  }
}
