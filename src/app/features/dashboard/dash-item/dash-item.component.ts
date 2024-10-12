import { Component, Input } from '@angular/core';
import { _Date } from 'src/app/shared/models/_date';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'dash-item',
  templateUrl: './dash-item.component.html',
  styleUrls: ['./dash-item.component.css'],
})
export class DashItemComponent {
  @Input() user: User;
  @Input() title: string;
  @Input() weight: number;
  @Input() height: number;
  @Input() date: _Date;
  calendar: boolean;
  bmiComponent:boolean;
}
