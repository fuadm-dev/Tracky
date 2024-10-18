import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  onTarget: string;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.setOnTarget();
  }
  
  setOnTarget(){
    let onTarget = this.user.userStats.onTarget;
    if (onTarget) {
      this.onTarget = 'On Target!';
    } else
    this.onTarget = 'Off Target!';
  }

}
