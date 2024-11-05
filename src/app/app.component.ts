import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './shared/models/user';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { Weight } from './shared/models/weight';
import { TrendItemComponent } from './features/dashboard/trend-item/trend-item.component';
import { DataTableComponent } from './features/data-table/data-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: User;
  onTarget: boolean;
  onTargetMessage: string;
  currentDate = new Date();

  selectedWeightLog: Weight;
  checked: boolean = true;

  @ViewChild(DashboardComponent) dashboardComponent: DashboardComponent;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  refreshData(): void {
    this.dashboardComponent.reBuildDashboard();
  }

  openModal(log: Weight) {
    this.selectedWeightLog = log;
    const modelContainer = document.getElementById('myModal');
    if (modelContainer != null) {
      modelContainer.style.display = 'block';
    }
  }

  closeModal() {
    const modelContainer = document.getElementById('myModal');
    if (modelContainer != null) {
      modelContainer.style.display = 'none';
    }
  }
}
