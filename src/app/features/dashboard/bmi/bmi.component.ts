import { Component, OnInit } from '@angular/core';
import { BmiService } from 'src/app/service/bmi.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css'],
})
export class BmiComponent implements OnInit {
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
