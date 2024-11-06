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
  chart: Chart;

  constructor(
    private chartService: ChartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.chartCanvas = document.getElementById(
      'weightChart'
    ) as HTMLCanvasElement;
    this.chartData = this.chartService.buildChartData(this.user);
    this.chart = this.chartService.drawChart(this.chartData, this.chartCanvas);
  }

  refreshChart(updatedChartData: IChart) {
    this.chartService.updateChart(updatedChartData, this.chart);
  }
}
