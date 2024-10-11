import { Component } from '@angular/core';
import { BmiService } from 'src/app/service/bmi.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.css'],
})
export class CurrentItemComponent {
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
    this.user.start.bmiStatus = this.bmiService.calcBmiStatus(startBmi);
    console.log(this.user);
  }
}
