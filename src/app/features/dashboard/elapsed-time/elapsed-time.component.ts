import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'elapsedTime-item',
  templateUrl: './elapsed-time.component.html',
  styleUrls: ['./elapsed-time.component.css'],
})
export class ElapsedTimeComponent {
  @Input() title: string = '';
  @Input() progress: number;
  progressArray: number[] = [];
  chart: any;

  constructor() {}
  ngOnInit(): void {
    this.createChart();
    this.progressArray = this.getWeightLossProgress(this.progress);
  }

  getWeightLossProgress(progress: number): number[] {
    let progressArr: number[] = [];
    progressArr.push(progress);
    progressArr.push(100 - progress);
    return progressArr;
  }

  createChart() {
    if (Chart.getChart('elapsedTimeChart')) {
      Chart.getChart('elapsedTimeChart')?.destroy();
    }
    this.chart = new Chart('elapsedTimeChart', {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        // labels: ['lost', 'left'],
        datasets: [
          {
            label: 'Progress',
            data: this.getWeightLossProgress(this.progress),
            backgroundColor: ['green', 'grey'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
