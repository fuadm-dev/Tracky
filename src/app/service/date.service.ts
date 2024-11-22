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
    
    timeElapsed.days = Math.round(diffMs / mSecondsInDay);
    timeElapsed.weeks = ((timeElapsed.days / 7) * 10) / 10;
    timeElapsed.months = Math.floor(timeElapsed.weeks / 4);
    timeElapsed.years = ((timeElapsed.months / 12) * 100) / 100;

    return timeElapsed;
  }
  calcRemainingTime(laterDate: Date, earlierDate: Date) {
    const timeElapsed: _Time = new _Time();

    const mSecondsInDay: number = 24 * 60 * 60 * 1000;
    const remainingTime: number = Math.abs(
      laterDate.getTime() - earlierDate.getTime()
    );

    timeElapsed.days = Math.round(remainingTime / mSecondsInDay);
    timeElapsed.weeks = Math.round(((timeElapsed.days / 7) * 10) / 10);
    timeElapsed.months = Math.floor(timeElapsed.weeks / 4);
    timeElapsed.years = ((timeElapsed.months / 12) * 100) / 100;

    return timeElapsed;
  }
}
