import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DateService } from 'src/app/service/date.service';
import { UserService } from 'src/app/service/user.service';
import { IDate_ } from 'src/app/shared/models/_date';
import { StatsClass } from 'src/app/shared/models/stats-class';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() user: User;
  userStats: StatsClass;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userStats = this.userService.getUser().userStats;
    console.log(this.user);
    console.log(this.user.userStats);
  }
}
