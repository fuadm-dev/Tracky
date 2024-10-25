import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { StatsClass } from 'src/app/shared/models/stats-class';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User;
  userStats: StatsClass;
  elapsedWeeks: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.userStats = this.userService.getUser().userStats;
    this.elapsedWeeks = Math.round(
      (this.userStats.elapsedTime.weeks / this.userStats.totalTime.weeks) * 100
    );
    console.log(this.user.userStats);    
  }
}
