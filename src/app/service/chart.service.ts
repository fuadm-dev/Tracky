import { Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  getChartData(user: User) {
    console.log(user.record.weightLogs);
    user.record.weightLogs.forEach((w) => {
      console.log(w.date.getMonth());
      console.log(w.weight);
    });
  }
}
