export class Question {
  _id: string;
  question: string;
  options: Option[];
}

export class Option {
  _id: string;
  option: string;
  isAnswer: boolean
}