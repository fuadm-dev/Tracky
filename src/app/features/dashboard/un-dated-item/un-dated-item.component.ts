import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'unDated-item',
  templateUrl: './un-dated-item.component.html',
  styleUrls: ['./un-dated-item.component.css'],
})
export class UnDatedItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() main: string = '';
  @Input() date: string = '';
  @Input() bmi: number;
  bmiStatus: string;

  ngOnInit(): void {
    if (this.bmi) {
      if (this.bmi < 18.5) {
        this.bmiStatus = 'underweight'
      }     
      if (this.bmi >= 18.5 && this.bmi <= 24.9) {
        this.bmiStatus = 'healthy';
      }     
      if (this.bmi >= 25 && this.bmi <= 29.9) {
        this.bmiStatus = 'overweight';
      }     
      if (this.bmi >= 30 && this.bmi <= 39.9) {
        this.bmiStatus = 'underweight';
      }   
    }
  }

}
