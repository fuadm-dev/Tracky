import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'start-item',
  templateUrl: './start-item.component.html',
  styleUrls: ['./start-item.component.css'],
})
export class StartItemComponent {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
  }

}
