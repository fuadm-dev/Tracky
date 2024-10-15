import { Weight } from './weight';

export interface Record {
  id: number;
  weightLogs: Weight[];
  isHistory: boolean;
}
