import { Component, Input } from '@angular/core';
import { InputService } from 'src/app/service/input.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css'],
})
export class DataInputComponent {
  @Input() user: User;

  constructor(private inputService: InputService) {}


}
