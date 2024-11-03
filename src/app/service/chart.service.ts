import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private dateService: DateService) {}
  datesArr = [];
  months = [];
  data = [];

  getMonths(user: User) {
    user.record.weightLogs.forEach((w) => {
      let monthName = this.dateService.getMonthName(w.date.getMonth());
      this.months.push(monthName);
      this.data.push(w.weight);
    });

    console.log(this.months);
    console.log(this.data);
  }
}
