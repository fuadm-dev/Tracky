import { AfterContentInit, Component, Input } from '@angular/core';
import { BmiService } from 'src/app/service/bmi.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css'],
})
export class BmiComponent implements AfterContentInit {
  @Input() weight: number;
  @Input() height: number;
  bmi: number;
  bmiStatus: string;

  constructor(private bmiService: BmiService) {}

  ngAfterContentInit(): void {
    this.bmi = this.bmiService.calcBmi(this.weight, this.height);
    this.bmiStatus = this.bmiService.calcBmiStatus(this.bmi);
  }
}
