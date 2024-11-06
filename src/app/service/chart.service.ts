import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Weight } from '../shared/models/weight';
import { DateService } from './date.service';
import { IChart } from '../shared/models/ichart';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private dateService: DateService) {}

  buildChartData(user: User): IChart {
    let userWeightLogs = user.record.weightLogs;
    let year: Weight[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
    let months = [];
    let weights = [];

    //Sort logs in date order
    userWeightLogs.sort((a, b) => a.date.getTime() - b.date.getTime());

    //Group logs by months into year array
    for (let i = 0; i < userWeightLogs.length; i++) {
      const weight = userWeightLogs[i];
      year[weight.date.getMonth()].push(weight);
    }

    //Take earliest weightlog from each month
    for (let i = 0; i < year.length; i++) {
      year[i].splice(1);
    }

    //Group months and weights into seperate arrays
    year.forEach((e) => {
      if (e.length) {
        const month = this.dateService.getMonthName(e[0].date.getMonth());
        const weight = e[0].weight;
        months.push(month);
        weights.push(weight);
      }
    });

    //Build chart object
    let chart: IChart = {
      months: [...months],
      weights: [...weights],
    };

    return chart;
  }

  //Draw chart
  drawChart(charData: IChart, chartElement: HTMLCanvasElement) {
    const ctx = chartElement.getContext('2d');

    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: charData.months,
        datasets: [
          {
            label: 'kg',
            data: charData.weights,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  //Update chart
  updateChart(chartData: IChart, chart: Chart) {
    if (chartData) {
      let monthsArr = chart.data.labels;
      let weightsArr = chart.data.datasets[0].data;

      monthsArr.splice(0, monthsArr.length, ...chartData.months);
      weightsArr.splice(0, weightsArr.length, ...chartData.weights);

      chart.update();
    }
  }
}
