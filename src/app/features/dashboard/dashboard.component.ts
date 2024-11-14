import {
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
export class DashboardComponent implements OnInit {
  user: User;
  userStats: StatsClass;
  dashItems: IDashItem[] = [];
  progressItems: IDashItem[] = [];
  chartDataset: IChart;
  excludedDashItems: string[] = [];

  @ViewChild(TrendItemComponent) trendItemComponent: TrendItemComponent;

  constructor(
    private userService: UserService,
    private statsService: StatisticsService,
    private dashBuilder: DashItemBuilderService,
    private chartService: ChartService
  ) {}

  ngOnInit() {
    this.reBuildDashboard();
  }

  // Refresh Dashboard
  reBuildDashboard() {
    this.user = this.userService.getUser();
    this.statsService.buildStats(this.user);
    this.userStats = this.user.userStats;
    this.dashItems = this.dashBuilder.buildDashItems(this.user);
    this.progressItems = this.dashBuilder.buildProgressDashItems(this.user);
    let chart = this.chartService.buildChartData(this.user);
    if (this.trendItemComponent) {
      this.trendItemComponent.refreshChart(chart);
    }

    console.log(this.user);
    console.log(this.dashItems);
    console.log(this.progressItems);
  }

  excludeDashItemFromDashboard(titlesToExclude: string[]) {
    for (let i = 0; i < this.dashItems.length; i++) {
      this.dashItems = this.dashItems.filter(
        (i) => !titlesToExclude.includes(i.title)
      );
    }
  }
}
