import { Component, Input } from '@angular/core';
import { _Time } from 'src/app/shared/models/_time';
import { User } from 'src/app/shared/models/user';
import Chart from 'chart.js/auto';

@Component({
  selector: 'progress-item',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  user: User;
  @Input() title: string = 'Progress';
  @Input() progress: number;
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['lost', ''],
        datasets: [
          {
            label: 'My First Dataset',
            data: [75, 25],
            backgroundColor: [
              'green',
              'grey'
            ],
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
