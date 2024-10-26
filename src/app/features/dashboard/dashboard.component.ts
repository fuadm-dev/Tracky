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

    this.buildDashItems(this.user);
    console.log(this.user.userStats);
    console.log(this.dashItems);
  }

  buildDashItems(user: User) {
    // build Start-Item
    const startItem: IDashItem = {
      title: 'Start',
      units: 'kg',
      weight: user.userStats.start.weight,
      date: user.userStats.start.date,
      calendar: true,
      bmiComponent: true,
    };

    // build Current-Item
    const currentItem: IDashItem = {
      title: 'Current',
      units: 'kg',
      weight: user.userStats.current.weight,
      date: user.userStats.current.date,
      calendar: true,
      bmiComponent: true,
    };

    // build Target-Item
    const targetItem: IDashItem = {
      title: 'Target',
      units: 'kg',
      weight: user.userStats.target.weight,
      date: user.userStats.target.date,
      calendar: true,
      bmiComponent: true,
    };

    // build Change-Item
    const changeItem: IDashItem = {
      title: 'Change',
      units: 'kg',
      weight: user.userStats.change.weightChange,
      calendar: false,
      bmiComponent: true,
    };

    // build Predicted-Item
    const predictedItem: IDashItem = {
      title: 'Predicted',
      units: 'kg',
      weight: user.userStats.predicted.weight,
      date: user.userStats.predicted.date,
      calendar: true,
      bmiComponent: true,
    };

    // build Progress-Item
    const progressItem: IDashItem = {
      title: 'Progress Made',
      units: '%',
      weight: user.userStats.pctProgress,
      progress: user.userStats.pctProgress,
      calendar: false,
      bmiComponent: false,
    };

    // build Time-Item
    const timeItem: IDashItem = {
      title: 'Elapsed Time',
      units: '%',
      weight: this.elapsedWeekAsPercent,
      progress: this.elapsedWeekAsPercent,
      calendar: false,
      bmiComponent: false,
    };

    this.dashItems.push(
      startItem,
      currentItem,
      targetItem,
      changeItem,
      predictedItem,
      progressItem,
      timeItem
    );
  }
}
