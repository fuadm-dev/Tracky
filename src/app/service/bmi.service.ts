import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BmiService {
  calcBmi(weight:number, height:number): number {
    const bmi = weight / Math.pow(height / 100, 2);
    return Math.round(bmi * 10) / 10;
  }

  calcBmiStatus(bmi: number): string{
    if (bmi) {
      if (bmi < 16.5) {
        return 'very underweight';
      } else if (bmi >= 16.5 && bmi < 18.5) {
        return 'underweight';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'healthy';
      } else if (bmi >= 25 && bmi <= 29.9) {
        return 'overweight';
      } else if (bmi >= 30 && bmi <= 39.9) {
        return 'obese';
      } else return 'very obese';
    }
    return '';
  }
}
