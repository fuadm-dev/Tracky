import { AfterViewInit, Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DashItemBuilderService } from 'src/app/service/dash-item-builder.service';
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
  dashItems: IDashItem[] = [];

  constructor(
    private userService: UserService,
    private statsService: StatisticsService,
    private dashBuilder: DashItemBuilderService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.statsService.buildStats(this.user);
    this.userStats = this.user.userStats;
    this.dashItems = this.dashBuilder.buildDashItems(this.user);
    this.statsService.buildStats(this.user);

    console.log(this.user);
    console.log(this.dashItems);
  }

  // Refresh Dashboard
  reBuildDashboard() {
    this.user = this.userService.getUser();
    this.statsService.buildStats(this.user);
    this.userStats = this.user.userStats;
    this.dashItems = this.dashBuilder.buildDashItems(this.user);
    this.statsService.buildStats(this.user);
    
  }
}
