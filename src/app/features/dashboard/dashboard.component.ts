import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ChartService } from 'src/app/service/chart.service';
import { DashItemBuilderService } from 'src/app/service/dash-item-builder.service';
import { UserService } from 'src/app/service/user.service';
import { IChart } from 'src/app/shared/models/ichart';
import { IDashItem } from 'src/app/shared/models/idash-item';
import { User } from 'src/app/shared/models/user';
import { TrendItemComponent } from './trend-item/trend-item.component';
import { ProgressComponent } from './progress/progress.component';
import { SetOnTargetService } from 'src/app/service/set-on-target.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User;
  dashItems: IDashItem[] = [];
  progressItems: IDashItem[] = [];


  @ViewChild(TrendItemComponent) trendItemComponent: TrendItemComponent;
  @ViewChild(ProgressComponent) progressItemComponent: ProgressComponent;

  constructor(
    private userService: UserService,
    private dashBuilderService: DashItemBuilderService,
    private chartService: ChartService,
    private targetService: SetOnTargetService,
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.reBuildDashboard(this.user);
  }

  // Refresh Dashboard
  reBuildDashboard(user:User) {
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
    let stats = this.user.userStats

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
