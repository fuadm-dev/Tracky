import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DateService } from 'src/app/service/date.service';
import { IDate_ } from 'src/app/shared/models/_date';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @Input() date: Date;
  itemDate: IDate_;
  day: number;
  month: number;
  year: number;

  constructor(private dateService: DateService) {}
  ngAfterViewInit(): void {
    this.day = this.date.getDate();
    this.month = this.date.getMonth()
    this.year = this.date.getFullYear()
  }

  ngOnInit(): void {
    this.itemDate = this.dateService.processDate(this.date);
  }
}
