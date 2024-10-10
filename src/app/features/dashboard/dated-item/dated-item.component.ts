import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dated-item',
  templateUrl: './dated-item.component.html',
  styleUrls: ['./dated-item.component.css'],
})
export class DatedItemComponent implements OnInit {
  @Input() title: string;
  @Input() main: string;
  @Input() date: string;
  @Input() bmi: number;
  bmiStatus: string;

  ngOnInit(): void {
    this.calcBmiStatus();
  }

  calcBmiStatus() {
    if (this.bmi) {
      if (this.bmi < 18.5) {
        this.bmiStatus = 'underweight';
      } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
        this.bmiStatus = 'healthy';
      } else if (this.bmi >= 25 && this.bmi <= 29.9) {
        this.bmiStatus = 'overweight';
      } else if (this.bmi >= 30 && this.bmi <= 39.9) {
        this.bmiStatus = 'obese';
      } else this.bmiStatus = 'morbidly obese';
    }
  }
}