import { Component, Input, OnInit } from '@angular/core';
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
  canvasId: string = 'progressChart';
  chart: Chart<'doughnut'>;
  colors: string[] = ['#28A745', '#a6a6a6'];
  labels: string[] = ['% weight reached', '% KG left'];

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.setupProgressChartCanvas(this.canvasId);
  }

  setupProgressChartCanvas(canvasId: string) {
    const chartCanvas = document.getElementById(canvasId) as HTMLCanvasElement;

    this.progressArray = this.chartService.buildProgressData(this.progress);
    this.chart = this.chartService.drawProgressChart(
      this.progressArray,
      chartCanvas,
      this.colors,
      this.labels
    );
  }

  refreshChart(progressArray: number[]) {
    this.chartService.updateProgressChart(progressArray, this.chart);
  }
}
