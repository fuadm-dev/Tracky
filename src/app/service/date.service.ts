import { Injectable } from '@angular/core';
import { IDate_ } from '../shared/models/_date';
import { ElapsedTime } from '../shared/models/elapsed-time';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  d1: any = new Date(1980, 0, 15);
  d2: Date = new Date();

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
    this.calcElapsedTime(this.d1, this.d2);
    return new Date().toLocaleDateString();
  }

  calcElapsedTime(laterDate: Date, earlierDate: Date) {
    const timeElapsed: ElapsedTime = new ElapsedTime();
    const mSecondsInDay: number = 24 * 60 * 60 * 1000;
    const diffMs: number = Math.abs(
      earlierDate.getTime() - laterDate.getTime()
    );

    timeElapsed.days = Math.round(diffMs / mSecondsInDay);
    timeElapsed.weeks = Math.ceil(((timeElapsed.days / 7) * 100) / 100);
    timeElapsed.months = Math.floor(timeElapsed.weeks / 4);
    timeElapsed.years = ((timeElapsed.months / 12) * 100) / 100;

    // console.log(timeElapsed);
    
    return timeElapsed;
  }
}
