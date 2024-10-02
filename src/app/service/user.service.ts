import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User =  {
    int: 1001,
    userName: 'fuad',
    email: 'fuad.yusuf1@gmail.com',
    password: 'fuad123',
    height: '180',
    gender: 'male',
    dob: new Date(),
    start: {
      startDate: new Date(),
      startWeight: 95,
      startBMI: 34
    },
    target: Target,
    record: Record,
    history: Record[],
  }
  constructor() { }
}
