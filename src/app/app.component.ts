import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './shared/models/user';
import { DateService } from './service/date.service';
import { IDate_ } from './shared/models/_date';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: User;
  onTarget: boolean;
  onTargetMessage: string;
  currentDate: string;

  @ViewChild(DashboardComponent) dashboardComponent: DashboardComponent;

  constructor(
    private userService: UserService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.setOnTarget(this.user);
    this.currentDate = this.dateService.setCurrentDate();
    
  }
  
  setOnTarget(user: User) {
    this.onTarget = user.userStats.onTarget;
    console.log(this.user.userStats);
    
    if (this.onTarget) {
      this.onTargetMessage = 'On Target!';
    } else this.onTargetMessage = 'Off Target!';
  }
}
