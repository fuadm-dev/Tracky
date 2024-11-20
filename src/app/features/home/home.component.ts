import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../shared/models/user';
import { DashboardComponent } from '../../features/dashboard/dashboard.component';
import { Weight } from '../../shared/models/weight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: User;
  onTarget: boolean;
  onTargetMessage: string;
  currentDate = new Date();

  selectedWeightLog: Weight;
  checked: boolean = true;

  @ViewChild(DashboardComponent) dashboardComponent: DashboardComponent;
  @ViewChild('editModal', { static: false }) editModal: ElementRef;
  @ViewChild('main', { static: false }) main: ElementRef;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  refreshData(): void {
    this.dashboardComponent.reBuildDashboard();
  }

  openModal(log: Weight) {
    this.selectedWeightLog = log;
    // const modelContainer = document.getElementById('myModal');
    if (this.editModal) {
      this.editModal.nativeElement.style.display = 'block';
      document.body.classList.add('modal-open');
      document.querySelector('.modal-backdrop')?.classList.add('show');
      (document.querySelector('.modal-backdrop') as HTMLElement).style.display =
        'block';
      let el = document.createElement('div');
      el.className = 'modal-backdrop fade show';
      el.style.display = 'block';
      this.editModal.nativeElement.appendChild(el);
    }
  }

  closeModal() {
    // const modelContainer = document.getElementById('myModal');
    if (this.editModal) {
      this.editModal.nativeElement.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop')?.classList.remove('show');
      (document.querySelector('.modal-backdrop') as HTMLElement).style.display =
        'none';
    }
  }
}
