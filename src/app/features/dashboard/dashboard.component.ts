import {
  AfterContentInit,
  AfterViewInit,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Component } from '@angular/core';
import { ChartService } from 'src/app/service/chart.service';
import { DashItemBuilderService } from 'src/app/service/dash-item-builder.service';
import { StatisticsService } from 'src/app/service/statistics.service';
import { UserService } from 'src/app/service/user.service';
import { IChart } from 'src/app/shared/models/ichart';
import { IDashItem } from 'src/app/shared/models/idash-item';
import { StatsClass } from 'src/app/shared/models/stats-class';
import { User } from 'src/app/shared/models/user';
import { TrendItemComponent } from './trend-item/trend-item.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  user: User;
  userStats: StatsClass;
  dashItems: IDashItem[] = [];
  chartDataset: IChart;

  @ViewChild(TrendItemComponent) trendItemComponent: TrendItemComponent;

  constructor(
    private userService: UserService,
    private statsService: StatisticsService,
    private dashBuilder: DashItemBuilderService,
    private chartService: ChartService
  ) {}

  ngAfterViewInit(): void {
    this.trendItemComponent.refreshChart();
  }

  ngOnInit() {
    this.reBuildDashboard();
    this.chartService.buildChartData(this.user);
  }

  // Refresh Dashboard
  reBuildDashboard() {
    this.user = this.userService.getUser();
    this.statsService.buildStats(this.user);
    this.userStats = this.user.userStats;
    this.dashItems = this.dashBuilder.buildDashItems(this.user);
    let chart = this.chartService.buildChartData(this.user);
    
    console.log(this.user);
    console.log(chart);
  }
}
