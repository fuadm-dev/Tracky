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

  deDuplicateWeightLogs(weighObjArr: Weight[]): IChart {
    let chart: IChart = { weights: [], months: [] };
    let uniqueWeightArr: Weight[];

    weighObjArr.reduce((accumulator: Weight[], current) => {
      if (
        !accumulator.find(
          (item) => `${item.monthDate}` === `${current.monthDate}`
        )
      ) {
        accumulator.push(current);
      }
      uniqueWeightArr = accumulator;
      return accumulator;
    }, []);

    for (let i = 0; i < uniqueWeightArr.length; i++) {
      const e = uniqueWeightArr[i];
      chart.weights.push(e.weight);
      chart.months.push(this.dateService.getMonthName(e.date.getMonth()));
    }

    console.log(chart);
    return chart;
  }

  buildTrendData(user: User): IChart {
    let userWeightLogs = user.record.weightLogs;

    //add month/year field
    userWeightLogs.forEach((w) => {
      w.monthDate = w.date.getMonth() + '/' + w.date.getFullYear();
    });

    return this.deDuplicateWeightLogs(userWeightLogs);
  }

  //Build progress data
  buildProgressData(progress: number): number[] {
    let progressArr: number[] = [];
    progressArr.push(progress);
    progressArr.push(100 - progress);
    return progressArr;
  }

  //Draw progress/time chart
  drawProgressChart(
    progressArr: number[],
    chartElement: HTMLCanvasElement,
    colors: string[],
    labels: string[],
  ) {
    const ctx = chartElement.getContext('2d');

    let chart = new Chart(ctx, {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: labels,
        datasets: [
          {
            label: 'Progress',
            data: progressArr,
            backgroundColor: colors,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins:{
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: function(item, everything) {
                return;
              }
            }
          }
        },
        aspectRatio: 2.5,
      },
    });
    return chart;
  }

  //Draw trend chart
  drawTrendChart(charData: IChart, chartElement: HTMLCanvasElement) {
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

  //Update trend chart
  updateTrendChart(chartData: IChart, chart: Chart) {
    if (chartData) {
      let monthsArr = chart.data.labels;
      let weightsArr = chart.data.datasets[0].data;

      monthsArr.splice(0, monthsArr.length, ...chartData.months);
      weightsArr.splice(0, weightsArr.length, ...chartData.weights);

      chart.update();
    }
  }

  //Update progress/time chart
  updateProgressChart(updatedChartData: number[], chart: Chart<'doughnut'>) {
    if (updatedChartData) {
      chart.data.datasets[0].data = updatedChartData;

      chart.update();
    }
  }

  //Update progress/time chart
  updateTimeChart(updatedChartData: number[], chart: Chart<'doughnut'>) {
    if (updatedChartData) {
      chart.data.datasets[0].data = updatedChartData;

      chart.update();
    }
  }
}
