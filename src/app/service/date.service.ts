import { Injectable } from '@angular/core';
import { IDate_ } from '../shared/models/_date';

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
    this.calcElapsedTime();
    return new Date().toLocaleDateString();
  }

  calcElapsedTime(){
    console.log(this.d1);
    console.log(this.d2);
    console.log('Years' +  Math.floor(this.tmeDiff / 86400000)/365);
    console.log('Months' +  Math.floor(this.tmeDiff / 86400000 / 365) * 12);
    console.log('Weeks' +  Math.floor((this.tmeDiff / 86400000 / 365) * 12) * 7);
  }
}
