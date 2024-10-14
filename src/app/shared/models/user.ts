import { Record } from './record';
import { Log } from './log';
import { StatsClass } from './stats-class';

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
  userStats: StatsClass;
  history: Record[];
}
