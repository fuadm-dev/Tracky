import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from 'src/app/service/chart.service';

@Component({
  selector: 'elapsedTime-item',
  templateUrl: './elapsed-time.component.html',
  styleUrls: ['./elapsed-time.component.css'],
})
export class ElapsedTimeComponent {
  @Input() title: string = '';
  @Input() progress: number;
  progressArray: number[] = [];
  chartCanvas: HTMLCanvasElement;
  chart: Chart<'doughnut'>;
  colors: string[] = ['#a6a6a6', '#28A745'];

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartCanvas = document.getElementById(
      'elapsedTimeChart'
    ) as HTMLCanvasElement;

    this.progressArray = this.chartService.buildProgressData(this.progress);
    this.chart = this.chartService.drawProgressChart(
      this.progressArray,
      this.chartCanvas,
      this.colors
    );
  }

  refreshChart(progressArray: number[]) {
    this.chartService.updateProgressChart(progressArray, this.chart);
    console.log('refreshing...');
  }
}
