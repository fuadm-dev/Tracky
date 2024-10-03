import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dated-item',
  templateUrl: './dated-item.component.html',
  styleUrls: ['./dated-item.component.css'],
})
export class DatedItemComponent {
  @Input() title: string = '';
  @Input() main: string = '';
  @Input() date: string = '';
  @Input() bmi: string = '';
}