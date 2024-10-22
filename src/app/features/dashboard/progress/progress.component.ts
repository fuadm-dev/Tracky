import { Component, Input, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/service/statistics.service';
import { UserService } from 'src/app/service/user.service';
import { _Time } from 'src/app/shared/models/_time';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'progress-item',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  user:User;
  @Input() title: string = '';
  @Input() progress: number;
  elapsedWeeks: _Time;

  constructor(private userService:UserService) {
    
  }
  ngOnInit(): void {
    this.user = this.userService.getUser();

  }
}
