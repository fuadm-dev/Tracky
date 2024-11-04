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
    let year = [
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

    user.record.weightLogs.forEach((w) => {
      
    });
  }


}
