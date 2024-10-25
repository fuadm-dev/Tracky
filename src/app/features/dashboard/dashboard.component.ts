import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { StatisticsService } from 'src/app/service/statistics.service';
import { UserService } from 'src/app/service/user.service';
import { IDashItem } from 'src/app/shared/models/idash-item';
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
  elapsedWeekAsPercent: number;

  dashItems: IDashItem[] = [];

  constructor(
    private userService: UserService,
    private statsService: StatisticsService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.statsService.buildStats(this.user);
    this.userStats = this.user.userStats;

    this.elapsedWeekAsPercent = Math.round(
      (this.userStats.elapsedTime.weeks / this.userStats.totalTime.weeks) * 100
    );

    this.buildDashItems(this.user)
    console.log(this.user.userStats);
    console.log(this.dashItems);
  }

  buildDashItems(user:User){
    // build Start-Item
    const startItem: IDashItem = {
      title: 'Start',
      units: 'kg',
      height: this.user.height,
      weight: user.userStats.start.weight,
      date: user.userStats.start.date,
      calendar: true,
      bmiComponent: true
    };

    // build Current-Item
    const currentItem: IDashItem = {
      title: 'Current',
      units: 'kg',
      height: this.user.height,
      weight: user.userStats.current.weight,
      date: user.userStats.current.date,
      calendar: true,
      bmiComponent: true
    };

    this.dashItems.push(startItem, currentItem)
  }
}
