import { Record } from './record';
import { Weight } from './weight';
import { StatsClass } from './stats-class';
import { Change } from './change';

export interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
  height: number;
  gender: string;
  dob: string;
  start: Weight;
  change: Change;
  target: Weight;
  record: Record;
  userStats: StatsClass;
  history: Record[];
}
