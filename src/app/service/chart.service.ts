import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { DateService } from './date.service';
import { Weight } from '../shared/models/weight';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private dateService: DateService) {}
  datesArr = [];
  months = [];
  data = [];

  getMonths(user: User) {
    let userWeightLogs = user.record.weightLogs;
    let year: Weight[][] = [[], [], [], [], [], [], [], [], [], [], [], []];

    //Sort logs in date order
    userWeightLogs.sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
    console.log(userWeightLogs);

    //Group logs by months into year array
    for (let i = 0; i < userWeightLogs.length; i++) {
      const weight = userWeightLogs[i];
      year[weight.date.getMonth()].push(weight);
    }

    //Return
    console.log(year);
  }
}
