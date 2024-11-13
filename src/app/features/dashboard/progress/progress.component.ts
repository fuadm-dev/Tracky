import { Component, Input } from '@angular/core';
import { _Time } from 'src/app/shared/models/_time';
import { User } from 'src/app/shared/models/user';
import Chart from 'chart.js/auto';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'progress-item',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  user: User;
  title: string = 'Goal Progress';
  progress: number;
  chart: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.createChart();
    this.progress = this.chart.data.datasets[0].data[0],
    console.log(this.chart.data.datasets[0].data[0]);
  }

  getWeightLossProgress(): number[] {
    let progressArr: number[] = [];
    progressArr.push(this.user.userStats.pctProgress);
    progressArr.push(100 - this.user.userStats.pctProgress);
    return progressArr;
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        // labels: ['lost', 'left'],
        datasets: [
          {
            label: 'Progress',
            data: this.getWeightLossProgress(),
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
