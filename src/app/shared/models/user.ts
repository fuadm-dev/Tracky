import { Record } from './record';
import { Weight } from './weight';
import { StatsClass } from './stats-class';
import { Change } from './change';
import { Target } from './target';

export interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
  height: number;
  gender: string;
  dob: string;
  start: Weight;
  target: Target;
  change: Change;
  record: Record;
  userStats: StatsClass;
  history: Record[];
}
