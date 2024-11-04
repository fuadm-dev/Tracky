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
    let year: Weight[][] = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ]

    for (let i = 0; i < user.record.weightLogs.length; i++) {
      const weight = user.record.weightLogs[i];
      year[weight.date.getMonth()].push(weight);
    }

    console.log(year);
    
  }

}
