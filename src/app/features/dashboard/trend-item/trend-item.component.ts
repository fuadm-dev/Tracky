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
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: '# of Votes',
            data: [118, 114, 110, 108, 107, 107, 106, 105, 103, 100, 99, 98],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
        legend: {
          display: false
        }
      },
      },
      
    });
    console.log(weightChart.data.datasets[0].data[0]);
    
  }
  
}
