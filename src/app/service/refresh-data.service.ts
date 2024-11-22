import { Injectable, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { ChartService } from './chart.service';
import { DashItemBuilderService } from './dash-item-builder.service';
import { SetOnTargetService } from './set-on-target.service';
import { ProgressComponent } from '../features/dashboard/progress/progress.component';
import { TrendItemComponent } from '../features/dashboard/trend-item/trend-item.component';
import { IDashItem } from '../shared/models/idash-item';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class RefreshDataService {
  user: User;
  dashItems: IDashItem[] = [];
  progressItems: IDashItem[] = [];

  @ViewChild(TrendItemComponent) trendItemComponent: TrendItemComponent;
  @ViewChild(ProgressComponent) progressItemComponent: ProgressComponent;

  constructor(
    private userService: UserService,
    private dashBuilderService: DashItemBuilderService,
    private chartService: ChartService,
    private targetService: SetOnTargetService
  ) {}

  ngOnInit() {
    this.reBuildDashboard(this.user);
    this.user = this.userService.getUser();
  }

  // Refresh Dashboard
  reBuildDashboard(user: User) {
    this.targetService.setOnTargetValue(user);
    this.dashItems = this.dashBuilderService.buildDashItems(user);
    this.progressItems = this.dashBuilderService.buildProgressDashItems(this.user);
    
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
    console.log('wLeft - ' + stats.remainingTime.weeks);
    console.log('dLeft - ' + stats.remainingTime.days);
    console.log('cWeight - ' + stats.current.weight);
    console.log('pWeight - ' + stats.predicted.weight);
    console.log(stats.target);
  }
  
}
