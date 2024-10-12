import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Log } from 'src/app/shared/models/log';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  current: {};

  constructor(private  userService: UserService) {}

  ngOnInit(){
    this.user = this.userService.getUser();
  }

}
