import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  getChartData(user: User) {
    let chartArr = [];
    let months = [];
    let data = [];

    const myDate = new Date();

    console.log(myDate);

    // user.record.weightLogs.forEach((w) => {
    //   let data = [];
    //   data.push(w.date.getMonth());
    //   data.push(w.weight);
    //   chartArr.push(data);
    // });

    // console.l g(chartArr);
  }
}
