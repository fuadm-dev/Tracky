import { Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { Weight } from '../shared/models/weight';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ChartService implements OnInit {
  constructor(private userService: UserService) {}
  user: User;

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.getMonths(this.user);
  }

  datesArr = [];
  months = [];
  data = [];

  getMonths(user: User) {
    let userWeightLogs = user.record.weightLogs;
    let year: Weight[][] = [[], [], [], [], [], [], [], [], [], [], [], []];

    //Sort logs in date order
    userWeightLogs.sort((a, b) => a.date.getTime() - b.date.getTime());

    //Group logs by months into year array
    for (let i = 0; i < userWeightLogs.length; i++) {
      const weight = userWeightLogs[i];
      year[weight.date.getMonth()].push(weight);
    }

    //Take earliest weightlog from each month
    for (let i = 0; i < year.length; i++) {
      year[i].splice(1)
    }

    //Return
    console.log(year); 
  }
}
