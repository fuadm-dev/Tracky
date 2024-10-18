import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  @Input() user: User;
}
