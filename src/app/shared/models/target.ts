import { IBmi } from './bmi';

export class Target {
  date?: Date;
  weight: number;
  bmi?: IBmi;
  isOnTarget: boolean;
  offTargetBy: number = 0;
  message: string;
}
