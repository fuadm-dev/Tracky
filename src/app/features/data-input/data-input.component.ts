import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { InputService } from 'src/app/service/input.service';
import { UserService } from 'src/app/service/user.service';
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

  @ViewChild('weightInput') weightKg: ElementRef;
  @ViewChild('weightDate') weightDate: ElementRef;

  constructor(private inputService: InputService) {}
  ngOnInit(): void {}

  onLogWeight() {
    const inputWeight: number = this.weightKg.nativeElement.value;
    const inputDate: string = this.weightDate.nativeElement.value;
    console.log(inputDate);

    const weight: Weight = {
      weight: inputWeight,
      date: new Date(inputDate),
    };

    this.inputService.logWeight(weight, this.user);

    console.log(this.user);
  }
}
