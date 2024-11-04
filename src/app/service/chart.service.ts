import { Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { Weight } from '../shared/models/weight';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root',
})
export class ChartService implements OnInit {
  constructor(private dateService: DateService) {}

  months = [];
  weights = [];

  ngOnInit(): void {}

  getMonths(user: User) {
    let userWeightLogs = user.record.weightLogs;
    let year: Weight[][] = [[], [], [], [], [], [], [], [], [], [], [], []];

    //Sort logs in date order
    userWeightLogs.sort((a, b) => a.date.getTime() - b.date.getTime());

    //Group logs by months into year array
    for (let i = 0; i < userWeightLogs.length; i++) {
      const weight = userWeightLogs[i];
      year[weight.date.getMonth()].push(weight);
    }

    //Take earliest weightlog from each month
    for (let i = 0; i < year.length; i++) {
      year[i].splice(1);
    }

    //Return
    console.log(year);

    year.forEach((e) => {
      if (e.length) {
        console.log(this.dateService.getMonthName(e[0].date.getMonth()));
        console.log(e[0].weight);
      }
    });
    return year;
  }
}
