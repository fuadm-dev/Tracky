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
  canvasId: string = 'elapsedTimeChart';
  chart: Chart<'doughnut'>;
  colors: string[] = ['#a6a6a6', '#28A745'];

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.setupProgressChartCanvas(this.canvasId)
  }

  setupProgressChartCanvas(canvasId: string) {
    const chartCanvas = document.getElementById(canvasId) as HTMLCanvasElement;

    this.progressArray = this.chartService.buildProgressData(this.progress);
    this.chart = this.chartService.drawProgressChart(
      this.progressArray,
      chartCanvas,
      this.colors
    );
  }

  refreshChart(progressArray: number[]) {
    this.chartService.updateProgressChart(progressArray, this.chart);
  }
}
