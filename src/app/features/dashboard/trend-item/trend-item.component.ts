import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'trend-item',
  templateUrl: './trend-item.component.html',
  styleUrls: ['./trend-item.component.css'],
})
export class TrendItemComponent implements OnInit {
  ngOnInit(): void {
    this.drawLineChart();
  }

  drawLineChart(){
    const chartCanvas = document.getElementById('weightChart') as HTMLCanvasElement;
    const ctx = chartCanvas.getContext('2d');

    const weightChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
  }
  
}
