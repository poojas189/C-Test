export class Question {
  question: string;
  options: Option[];
}

export class Option {
  option: string;
  isAnswer: boolean
}