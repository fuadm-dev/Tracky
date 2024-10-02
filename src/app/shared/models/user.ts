import { Start } from './start';
import { Target } from './target';
import { Record } from './record';

export interface User {
  int: string;
  userName: string;
  email: string;
  password: string;
  height: string;
  gender: string;
  dob: Date;
  start: Start;
  target: Target;
  record: Record;
  history: Record[];
}
