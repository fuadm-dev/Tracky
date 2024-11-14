import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { _Time } from 'src/app/shared/models/_time';
import Chart from 'chart.js/auto';
import { ChartService } from 'src/app/service/chart.service';

@Component({
  selector: 'progress-item',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  @Input() title: string = '';
  @Input() progress: number;
  progressArray: number[] = [];
  chartCanvas: HTMLCanvasElement;
  chart: Chart<'doughnut'>;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartCanvas = document.getElementById(
      'MyChart'
    ) as HTMLCanvasElement;

    this.progressArray = this.getWeightLossProgress(this.progress);
    this.chart = this.chartService.drawProgressChart(this.progressArray, this.chartCanvas);
  }

  getWeightLossProgress(progress: number): number[] {
    let progressArr: number[] = [];
    progressArr.push(progress);
    progressArr.push(100 - progress);
    return progressArr;
  }

  refreshChart(updatedChartData: number[]) {
    this.chartService.updateProgressChart(updatedChartData, this.chart);
  }

  // createChart(progressArr: number[]) {
  //   if (Chart.getChart('MyChart')) {
  //     Chart.getChart('MyChart')?.destroy();
  //   }
  //   console.log(this.progressArray);

  //   this.chart = new Chart('MyChart', {
  //     type: 'doughnut', //this denotes tha type of chart

  //     data: {
  //       // values on X-Axis
  //       // labels: ['lost', 'left'],
  //       datasets: [
  //         {
  //           label: 'Progress',
  //           data: progressArr,
  //           backgroundColor: ['#28A745', '#a6a6a6'],
  //           hoverOffset: 4,
  //         },
  //       ],
  //     },
  //     options: {
  //       aspectRatio: 2.5,
  //     },
  //   });
  // }
}
