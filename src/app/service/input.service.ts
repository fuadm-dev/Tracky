import { Injectable, OnInit } from '@angular/core';
import { Weight } from '../shared/models/weight';
import { UserService } from './user.service';
import { User } from '../shared/models/user';
import { BmiService } from './bmi.service';

@Injectable({
  providedIn: 'root'
})
export class InputService implements OnInit {
  user: User;

  constructor(private userService: UserService, private bmiService: BmiService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  logWeight(weight: Weight, user:User){
    weight.bmi = this.bmiService.getBmi(weight.weight, user.height)
    user.record.weightLogs.push(weight);
  }
}
