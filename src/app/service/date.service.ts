import { Injectable } from '@angular/core';
import { IDate_ } from '../shared/models/_date';
import { ElapsedTime } from '../shared/models/elapsed-time';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  d1:any = new Date(1980, 0, 15);
  d2:Date = new Date();

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
 
  calcElapsedTime(startTime:Date, endTime: Date){
    const difference = endTime.getTime() - startTime.getTime();
    const timeElapsed: ElapsedTime = new ElapsedTime();
    timeElapsed.days = Math.floor(difference / (1000 * 3600 * 24));
    timeElapsed.weeks = Math.floor((difference / (1000 * 3600 * 24) / 365) * 12) * 7;
    timeElapsed.months = Math.floor(difference / (1000 * 3600 * 24) / 365) * 12;
    timeElapsed.years =
      Math.round((Math.floor(difference / (1000 * 3600 * 24)) / 365) * 10) / 10;
 
    return timeElapsed;
    
  }
}
