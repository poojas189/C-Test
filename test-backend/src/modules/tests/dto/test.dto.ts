import { ObjectId } from "mongoose";
import { QuestionDto } from "src/modules/questions/dto/question.dto";

export class TestDto {
  _id: ObjectId;
  questions: QuestionDto[];
  selectedAnswers: any;
  duration: number;
}