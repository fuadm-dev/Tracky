import { Injectable } from '@angular/core';
import { IDate_ } from '../shared/models/_date';
import { ElapsedTime } from '../shared/models/elapsed-time';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  d1:any = new Date(1980, 0, 15);
  d2:number = Date.now();

  tmeDiff = this.d2 - this.d1;

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
    // this.calcElapsedTime();
    return new Date().toLocaleDateString();
  }

  calcElapsedTime(startTime:any, endTime: Date){
    const elapsed: ElapsedTime = new ElapsedTime();
    elapsed.days = Math.floor(this.tmeDiff / 86400000);
    elapsed.weeks = Math.floor((this.tmeDiff / 86400000 / 365) * 12) * 7;
    elapsed.months = Math.floor(this.tmeDiff / 86400000 / 365) * 12;
    elapsed.years =
      Math.round((Math.floor(this.tmeDiff / 86400000) / 365) * 10) / 10;

    console.log(elapsed);
    
  }
}
