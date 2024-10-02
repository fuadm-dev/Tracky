import { Log } from "./log";
import { Statistics } from "./statistics";

export interface Record {
  int: number;
  weightLogs: Log[];
  isHistory: boolean;
  stats: Statistics
}
