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
      'progressChart'
    ) as HTMLCanvasElement;

    this.progressArray = this.chartService.buildProgressData(this.progress);
    this.chart = this.chartService.drawProgressChart(
      this.progressArray,
      this.chartCanvas
    );
  }

  refreshChart(progressArray:number[]) {
    this.chartService.updateProgressChart(progressArray, this.chart);
    console.log('refreshing...');
  }
}
