import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  getChartData(user: User) {
    let chartArr = [];

    console.log(user.record.weightLogs);

    user.record.weightLogs.forEach((w) => {
      let data = [];
      data.push(w.date.getMonth());
      data.push(w.weight);
      chartArr.push(data);
    });

    console.log(chartArr);
  }
}
