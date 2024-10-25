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
    this.user.record.weightLogs.push(this.test);
  }
}
