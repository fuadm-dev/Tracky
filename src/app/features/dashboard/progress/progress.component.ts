import { Component, Input, OnInit } from '@angular/core';
import { _Time } from 'src/app/shared/models/_time';
import Chart from 'chart.js/auto';

@Component({
  selector: 'progress-item',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  @Input() title: string = '';
  @Input() progress: number;
  progressArray: number[] = [];
  chart: any;

  constructor() {}
  ngOnInit(): void {
    this.createChart();
    this.progressArray = this.getWeightLossProgress(this.progress);
    console.log(this.progressArray);
  }

  getWeightLossProgress(progress: number): number[] {
    let progressArr: number[] = [];
    progressArr.push(progress);
    progressArr.push(100 - progress);
    return progressArr;
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart('MyChart', {
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
    this.chart.update()
  }
}
