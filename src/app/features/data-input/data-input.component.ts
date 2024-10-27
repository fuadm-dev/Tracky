import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
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
  user: User;
  @Output() onWeightInput: EventEmitter = new EventEmitter();
  @ViewChild('weightInput') weightKg: ElementRef;
  @ViewChild('weightDate') weightDate: ElementRef;

  constructor(
    private userService: UserService,
    private inputService: InputService,
  ) {}
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  onLogWeight() {
    const inputWeight: number = this.weightKg.nativeElement.value;
    const inputDate: string = this.weightDate.nativeElement.value;

    const weight: Weight = {
      weight: inputWeight,
      date: new Date(inputDate),
    };

    this.inputService.logWeight(weight, this.user);
  }
}


function Output(): (target: DataInputComponent, propertyKey: "onWeightInput") => void {
  throw new Error('Function not implemented.');
}
/*
OnLogWeight rebuild dashItems & calendar


*/
