import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ChartService } from 'src/app/service/chart.service';
import { DashItemBuilderService } from 'src/app/service/dash-item-builder.service';
import { UserService } from 'src/app/service/user.service';
import { IChart } from 'src/app/shared/models/ichart';
import { IDashItem } from 'src/app/shared/models/idash-item';
import { StatsClass } from 'src/app/shared/models/stats-class';
import { User } from 'src/app/shared/models/user';
import { TrendItemComponent } from './trend-item/trend-item.component';
import { ProgressComponent } from './progress/progress.component';
import { SetOnTargetService } from 'src/app/service/set-on-target.service';
import { DateService } from 'src/app/service/date.service';

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
  @ViewChild(ProgressComponent) progressItemComponent: ProgressComponent;

  constructor(
    private userService: UserService,
    private dashBuilder: DashItemBuilderService,
    private chartService: ChartService,
    private targetService: SetOnTargetService,
    private dateService: DateService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.reBuildDashboard();
  }

  // Refresh Dashboard
  reBuildDashboard() {
    this.user = this.userService.getUser();
    this.targetService.setOnTargetValue(this.user);
    this.userStats = this.user.userStats;
    this.dashItems = this.dashBuilder.buildDashItems(this.user);
    this.progressItems = this.dashBuilder.buildProgressDashItems(this.user);
    let trendChartData = this.chartService.buildTrendData(this.user);
    let progressChartData = this.chartService.buildProgressData(
      this.user.userStats.pctProgress
    );
    if (this.trendItemComponent) {
      this.trendItemComponent.refreshChart(trendChartData);
    }
    if (this.progressItemComponent) {
      this.progressItemComponent.refreshChart(progressChartData);
    }

    // TESTING logs-------------------------------
    let stats = this.user.userStats;

    console.log(this.user);
    // console.log(this.dashItems);
    // console.log('expectedLossRate - ' + stats.lossRate.expected);
    console.log('wLeft - ' + stats.remainingTime.months);
    console.log('mLeft - ' + stats.remainingTime.weeks);
    console.log('dLeft - ' + stats.remainingTime.days);
    console.log('cWeight - ' + stats.current.weight);
    console.log('pWeight - ' + stats.predicted.weight);
    console.log(stats.target);
  }
}
