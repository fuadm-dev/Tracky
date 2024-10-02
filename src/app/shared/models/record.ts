import { Log } from './log';

export interface Record {
  id: number;
  weightLogs: Log[];
  isHistory: boolean;
}
