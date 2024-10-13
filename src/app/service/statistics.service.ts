import { Injectable, OnInit } from '@angular/core';
import { BmiService } from './bmi.service';
import { User } from '../shared/models/user';
import { Statistics } from '../shared/models/statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService implements OnInit {

  constructor(private bmiService: BmiService) { }

  ngOnInit(): void {
    
  }

  getStatistics(user: User){
   let stats: Statistics;

   
  }

}
