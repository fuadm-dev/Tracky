import { Injectable } from '@angular/core';
import { _Time } from '../shared/models/_time';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  calcElapsedTime(laterDate: Date, earlierDate: Date) {
    const timeElapsed: _Time = new _Time();
    const mSecondsInDay: number = 24 * 60 * 60 * 1000;
    const diffMs: number = Math.abs(
      earlierDate.getTime() - laterDate.getTime()
    );

    timeElapsed.days = Math.round(diffMs / mSecondsInDay);
    timeElapsed.weeks = Math.round(((timeElapsed.days / 7) * 100) / 100);
    timeElapsed.months = Math.floor(timeElapsed.weeks / 4);
    timeElapsed.years = ((timeElapsed.months / 12) * 100) / 100;

    return timeElapsed;
  }
}
