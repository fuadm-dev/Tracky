import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { StatsClass } from 'src/app/shared/models/stats-class';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'progress-item',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  @Input() title: string = '';
  @Input() progress: number;

  user: User;
  userStats: StatsClass;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
    this.userStats = this.userService.getUser().userStats;
  }
}
