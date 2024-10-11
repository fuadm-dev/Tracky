import { Component } from '@angular/core';
import { BmiService } from 'src/app/service/bmi.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'start-item',
  templateUrl: './start-item.component.html',
  styleUrls: ['./start-item.component.css'],
})
export class StartItemComponent {
  user: User;

  constructor(
    private userService: UserService,
    private bmiService: BmiService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    const startBmi = this.bmiService.calcBmi(
      this.user.start.weight,
      this.user.height
    );
    this.user.start.bmi = startBmi;
    this.user.start.bmiStatus = this.bmiService.calcBmiStatus(startBmi);
  }
}
