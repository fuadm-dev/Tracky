import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Weight } from '../shared/models/weight';
import { DateService } from './date.service';
import { IChart } from '../shared/models/ichart';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private dateService: DateService) {}

  buildChartData(user: User): IChart {
    let userWeightLogs = user.record.weightLogs;
    let year: Weight[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
    let months = [];
    let weights = [];

    //Sort logs in date order
    userWeightLogs.sort((a, b) => a.date.getTime() - b.date.getTime());

    //Group logs by months into year array
    for (let i = 0; i < userWeightLogs.length; i++) {
      const weight = userWeightLogs[i];
      year[weight.date.getMonth()].push(weight);
    }

    //Take earliest weightlog from each month
    for (let i = 0; i < year.length; i++) {
      year[i].splice(1);
    }

    //Group months and weights into seperate arrays
    year.forEach((e) => {
      if (e.length) {
        const month = this.dateService.getMonthName(e[0].date.getMonth());
        const weight = e[0].weight;
        months.push(month);
        weights.push(weight);
      }
    });

    //Build chart object
    let chart: IChart = {
      months: [...months],
      weights: [...weights],
    };

    return chart;
  }
}
