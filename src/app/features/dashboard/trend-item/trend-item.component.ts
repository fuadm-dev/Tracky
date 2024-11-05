import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
import { ChartService } from 'src/app/service/chart.service';
import { UserService } from 'src/app/service/user.service';
import { IChart } from 'src/app/shared/models/ichart';
import { User } from 'src/app/shared/models/user';
Chart.register(...registerables);

@Component({
  selector: 'trend-item',
  templateUrl: './trend-item.component.html',
  styleUrls: ['./trend-item.component.css'],
})
export class TrendItemComponent implements OnInit {
  user: User;
  chartData: IChart;
  chartCanvas: HTMLCanvasElement;
  constructor(
    private chartService: ChartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.chartData = this.chartService.buildChartData(this.user);

    this.chartCanvas = document.getElementById(
      'weightChart'
    ) as HTMLCanvasElement;

    this.refreshTrendData(this.chartData, this.chartCanvas);
    console.log(this.chartData);
  }

  refreshChart(){
    this.chartService.updateChart(this.chartData.months, this.chartData.weights, )
    // this.refreshTrendData(this.chartData, this.chartCanvas);
  }

  refreshTrendData(chartDataSet: IChart, canvas: HTMLCanvasElement) {
    this.chartService.drawChart(chartDataSet, canvas);
    console.log('refreshTrendData...');
  }
}
