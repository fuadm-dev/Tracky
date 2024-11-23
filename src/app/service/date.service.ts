import { Injectable } from '@angular/core';
import { _Time } from '../shared/models/_time';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  getMonthName(monthNum: number): string {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return monthNames[monthNum];
  }

  calcElapsedTime(laterDate: Date, earlierDate: Date) {
    const timeElapsed: _Time = new _Time();
    const mSecondsInDay: number = 24 * 60 * 60 * 1000;
    const diffMs: number = Math.abs(
      laterDate.getTime() - earlierDate.getTime()
    );

    timeElapsed.days = Math.round((diffMs / mSecondsInDay) * 100) / 100;
    timeElapsed.weeks = Math.round((timeElapsed.days / 7) * 100) / 100;
    timeElapsed.months = Math.round((timeElapsed.weeks / 4) * 100) / 100;
    
    timeElapsed.years = timeElapsed.months / 12;

    return timeElapsed;
  }
}
