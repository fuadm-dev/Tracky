import { Component, Input, OnInit } from '@angular/core';

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
  chartData:IChart;

  constructor(private chartService:ChartService, private userService:UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.chartData = this.chartService.buildChartData(this.user);
    this.refreshTrendData(this.chartData);    
    console.log(this.chartData);      
  }

  refreshTrendData(chartDataSet: IChart){
    this.drawLineChart(chartDataSet);    
    console.log('refreshTrendData...');
    
  }

  drawLineChart(chartData:IChart){
    const chartCanvas = document.getElementById('weightChart') as HTMLCanvasElement;
    const ctx = chartCanvas.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartData.months,
        datasets: [
          {
            label: 'kg',
            data: chartData.weights,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
        legend: {
          display: false
        }
      },
      },
      
    });
    
  }
  
}
