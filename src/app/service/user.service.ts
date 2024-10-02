import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Target } from '../shared/models/target';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User =  {
    id: 1001,
    userName: 'fuad',
    email: 'fuad.yusuf1@gmail.com',
    password: 'fuad123',
    height: '180',
    gender: 'male',
    dob: '15/01/1980',
    start: {
      startDate: '01/10/2024',
      startWeight: 106,
      startBMI: 34
    },
    target: {
      targetDate: '01/01/2025',
      targetWeight: 100, 
      targetBMI: 30, 
    },
    record: {
      weightLogs: Log[{}],
      isHistory: false,
      stats: 
    },
    history: Record[],
  }
  constructor() { }
}
