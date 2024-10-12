import { Target } from './target';
import { Record } from './record';
import { Log } from './log';

export interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
  height: number;
  gender: string;
  dob: string;
  start: Log;
  current: Log;
  target: Log;
  record: Record;
  history: Record[];
}
