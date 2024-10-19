import { Component, Input, OnInit } from '@angular/core';
import { DateService } from 'src/app/service/date.service';
import { IDate_ } from 'src/app/shared/models/_date';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input() date: Date;
  itemDate: IDate_;
  day: number;
  month: string;
  year: number;

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.itemDate = this.dateService.processDate(this.date);
    console.log(this.dateService.processDate(this.date));
    
  }

}
