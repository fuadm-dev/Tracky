import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './shared/models/user';
import { DateService } from './service/date.service';
import { DashboardComponent } from './features/dashboard/dashboard.component';
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
  checked: boolean = true;

  @ViewChild(DashboardComponent) dashboardComponent: DashboardComponent;

  constructor(
    private userService: UserService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    // this.selectedWeightLog = this.user.userStats.current;
    this.currentDate = this.dateService.setCurrentDate();
  }

  openModal(log: Weight) {
    this.selectedWeightLog = log;
    const modelContainer = document.getElementById('myModal');
    if (modelContainer != null) {
      modelContainer.style.display = 'block'
    }
    console.log(log);
  }
  closeModal() {
    const modelContainer = document.getElementById('myModal');
    if (modelContainer != null) {
      modelContainer.style.display = 'none'
    }
  }
}
