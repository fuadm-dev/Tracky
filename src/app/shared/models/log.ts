import { _Date } from "./_date";
import { Bmi } from "./bmi";

export interface Log {
  date: _Date
  weight: number;
  bmi: Bmi
}
