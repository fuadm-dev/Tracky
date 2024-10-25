import { Component, Input, OnInit } from '@angular/core';
import { InputService } from 'src/app/service/input.service';
import { User } from 'src/app/shared/models/user';
import { Weight } from 'src/app/shared/models/weight';

@Component({
  selector: 'data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css'],
})
export class DataInputComponent implements OnInit {
  @Input() user: User;
  test: Weight = new Weight();

  constructor(private inputService: InputService) {}
  ngOnInit(): void {
    this.test.weight = 97;
    this.test.date = new Date();
    this.test.bmi.bmi = 30;

    console.log(this.test);

    this.user.record.weightLogs.push(this.test);

    //input service
    //button
  }
}
