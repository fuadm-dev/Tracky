import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { StatsClass } from 'src/app/shared/models/stats-class';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'dash-item',
  templateUrl: './dash-item.component.html',
  styleUrls: ['./dash-item.component.css'],
})
export class DashItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() date?: Date;
  @Input() units: string = 'kg';
  @Input() weight?: number;
  @Input() progress?: number;
  @Input() calendar?: boolean = true;
  @Input() bmiComponent?: boolean = true;

  user: User;
  userStats: StatsClass;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.userStats = this.userService.getUser().userStats;
  }
}
