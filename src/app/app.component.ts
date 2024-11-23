import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './shared/models/user';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { Weight } from './shared/models/weight';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

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

  currentRoute: string;

  @ViewChild(DashboardComponent) dashboardComponent: DashboardComponent;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.currentRoute = this.router.url;
    this.refreshData();
  }

  refreshData(): void {
    this.dashboardComponent?.reBuildDashboard();
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
