import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  setDate(date: Date) {
    date: Date;
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

    this.day = date.getDate();
    this.month = monthNames[date.getMonth()].substring(0, 3);
    this.year = date.getFullYear();
  }
}
