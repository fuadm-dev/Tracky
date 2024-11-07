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

  checkIfDuplicate(weightObj1: Weight, weightObj2: Weight): boolean {
    return weightObj1.monthDate === weightObj2.monthDate;
  }

  buildChartData(user: User): IChart {
    let userWeights: Weight[];
    let weightChart: IChart;
    let unique = [];

    let userWeightLogs = user.record.weightLogs;
    let year: Weight[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
    let months = [];
    let weights = [];

    //Sort userWeightLog Objects in date order
    userWeightLogs.sort((a, b) => a.date.getTime() - b.date.getTime());

    //add month/year field
    userWeightLogs.forEach((w) => {
      w.monthDate = w.date.getMonth() + '/' + w.date.getFullYear();
    });

    userWeightLogs.forEach((w, i) => {
      if (unique.length == 0) {
        unique.push(w);
      }

      if (unique[i]) {
        let isDuplicate = this.checkIfDuplicate(unique[i], w);
        console.log(isDuplicate);
        if(!isDuplicate){
          unique.push(w)
        }
      }
      
    });

    console.log(unique);
    

    //----------------------------------------
    //Group logs by months into year array
    for (let i = 0; i < userWeightLogs.length; i++) {
      const weight = userWeightLogs[i];
      year[weight.date.getMonth()].push(weight);
    }

    //Take earliest weightlog from each month
    for (let i = 0; i < year.length; i++) {
      year[i].splice(1);
    }
    //----------------------------------------

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
