import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css'],
})
export class DataInputComponent {
  @Input() user: User;
}
