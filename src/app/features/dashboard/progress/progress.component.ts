import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-item',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  @Input() title: string = '';
  @Input() progress: number;
  
}
