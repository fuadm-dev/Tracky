import { Component, OnInit } from '@angular/core';
import { BmiService } from 'src/app/service/bmi.service';
import { UserService } from 'src/app/service/user.service';
import { Log } from 'src/app/shared/models/log';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.css'],
})
export class CurrentItemComponent implements OnInit {
  user: User;
  current: Log;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    const logs: Log[] = this.user.record.weightLogs;
    this.user = this.userService.getUser();
    this.current = this.user.record.weightLogs[logs.length - 1]
  }


}
