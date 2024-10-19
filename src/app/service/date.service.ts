import { Injectable } from '@angular/core';
import { IDate_ } from '../shared/models/_date';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  processDate(d: Date): IDate_ {
    let date: IDate_ = {
      day: 0,
      month: '',
      year: 0,
    };
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    date.day = d.getDate();
    date.month = monthNames[d.getMonth()].substring(0, 3);
    date.year = d.getFullYear();

    return date;
  }

  setCurrentDate(): string {
    return new Date().toLocaleDateString();
  }

  // calcTotalTime(start:)
}
