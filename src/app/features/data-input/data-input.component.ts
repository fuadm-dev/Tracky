import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
  dp = document.getElementById('dateOfWeight');
  dateToday: string = this.getTodaysDate();
  @Output() onWeightInput = new EventEmitter<User>();
  @ViewChild('weightInput') weightKg: ElementRef;
  @ViewChild('weightDate') weightDate: ElementRef;

  constructor(
    private userService: UserService,
    private inputService: InputService
  ) {}
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  getTodaysDate(): string {
    const date: Date = new Date();

    const todaysDate:string = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    return todaysDate;
  }

  onLogWeight() {
    const inputWeight: number = +this.weightKg.nativeElement.value;
    const inputDate: string = this.weightDate.nativeElement.value;

    if (inputWeight > 50 && Date.parse(inputDate)) {
      const weight: Weight = {
        weight: inputWeight,
        date: new Date(inputDate),
      };

      this.inputService.logWeight(weight, this.user);
      this.onWeightInput.emit(this.user);
    }
  }
}
