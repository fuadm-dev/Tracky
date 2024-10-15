import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentDateService {
  constructor() {}

  getDate() {
    const fullDate = new Date();
    const day = ('0' + fullDate.getDate()).slice(-2);
    const month = ('0' + (fullDate.getMonth() + 1)).slice(-2);
    const year = fullDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
