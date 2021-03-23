import { Question } from "./question";

export class Test {
  _id: any;
  questions: Question[];
  selectedAnswers: any;
  duration: number;
  result: number;
  date: Date;
}