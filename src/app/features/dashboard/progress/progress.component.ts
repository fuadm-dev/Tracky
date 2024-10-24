import { Component, Input } from '@angular/core';
import { _Time } from 'src/app/shared/models/_time';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'progress-item',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  user:User;
  @Input() title: string = '';
  @Input() progress: number;
  
}
