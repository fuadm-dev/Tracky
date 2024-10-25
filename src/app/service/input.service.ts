import { Injectable, OnInit } from '@angular/core';
import { Weight } from '../shared/models/weight';
import { UserService } from './user.service';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class InputService implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  addWeight(weight: Weight){
    this.user.record.weightLogs.push(weight);
  }
}
