import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Weight } from '../shared/models/weight';

@Injectable({
  providedIn: 'root',
})
export class EditWeightService {
  constructor(private userService: UserService) {}

}
