import { Component } from '@angular/core';
import { BmiService } from 'src/app/service/bmi.service';
import { UserService } from 'src/app/service/user.service';
import { Log } from 'src/app/shared/models/log';
import { User } from 'src/app/shared/models/user';
import { Date } from 'src/app/shared/models/_date';

@Component({
  selector: 'current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.css'],
})
export class CurrentItemComponent {
  user: User;

  let current: Log = {
    weight: 107.2,
    bmi: 34,
    date: {
      day: 10,
      month: 'June',
      year: 2024
    }
  }

  constructor(
    private userService: UserService,
    private bmiService: BmiService
  ) {}


}
