import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { IDashItem } from '../shared/models/idash-item';

@Injectable({
  providedIn: 'root',
})
export class DashItemBuilderService {
  constructor() {}

  buildDashItems(user: User): IDashItem[] {
    let dashItemsArr: IDashItem[] = [];
    // build Start-Item
    let elapsedWeekAsPercent: number = Math.round(
      (user.userStats.elapsedTime.weeks / user.userStats.totalTime.weeks) * 100
    );

    const startItem: IDashItem = {
      title: 'Start',
      units: 'kg',
      weight: user.userStats.start.weight,
      date: user.userStats.start.date,
      calendar: true,
      bmiComponent: true,
      bmi: true;
      bmiStatus: true
    };

    // build Current-Item
    const currentItem: IDashItem = {
      title: 'Last',
      units: 'kg',
      weight: user.userStats.current.weight,
      date: user.userStats.current.date,
      calendar: true,
      bmiComponent: true,
    };

    // build Target-Item
    const targetItem: IDashItem = {
      title: 'Target',
      units: 'kg',
      weight: user.userStats.target.weight,
      date: user.userStats.target.date,
      calendar: true,
      bmiComponent: true,
    };

    // build Change-Item
    const changeItem: IDashItem = {
      title: 'Change',
      units: 'kg',
      weight: user.userStats.change.weightChange,
      calendar: false,
      bmiComponent: true,
    };

    // build Predicted-Item
    const predictedItem: IDashItem = {
      title: 'Predicted',
      units: 'kg',
      weight: user.userStats.predicted.weight,
      date: user.userStats.predicted.date,
      calendar: true,
      bmiComponent: true,
    };

    // build Progress-Item
    const progressItem: IDashItem = {
      title: 'Progress Made',
      units: '%',
      weight: user.userStats.pctProgress,
      progress: user.userStats.pctProgress,
      calendar: false,
      bmiComponent: false,
    };

    // build Time-Item
    const timeItem: IDashItem = {
      title: 'Elapsed Time',
      units: '%',
      weight: elapsedWeekAsPercent,
      progress: elapsedWeekAsPercent,
      calendar: false,
      bmiComponent: false,
    };

    dashItemsArr.push(
      startItem,
      currentItem,
      targetItem,
      changeItem,
      predictedItem,
      progressItem,
      timeItem
    );

    return dashItemsArr;
  }
}
