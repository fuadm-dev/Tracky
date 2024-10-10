import { Start } from './start';
import { Target } from './target';
import { Record } from './record';

export interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
  height: number;
  gender: string;
  dob: string;
  start: Start;
  target: Target;
  record: Record;
  history: Record[];
}
