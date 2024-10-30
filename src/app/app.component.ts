import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './shared/models/user';
import { DateService } from './service/date.service';
import { IDate_ } from './shared/models/_date';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { StatisticsService } from './service/statistics.service';
import { Weight } from './shared/models/weight';

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

  selectedWeightLog: Weight;

  @ViewChild(DashboardComponent) dashboardComponent: DashboardComponent;
  @ViewChild('editModal') editModal: ElementRef;

  constructor(
    private userService: UserService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.selectedWeightLog = this.user.userStats.current;
    this.currentDate = this.dateService.setCurrentDate();
  }

  onTableClick(log: Weight) {
    this.selectedWeightLog = log;
    console.log(this.editModal.nativeElement);
  }
}
