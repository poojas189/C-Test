import { ObjectId } from "mongoose";
import { OptionDto } from "./option.dto";

export class QuestionDto {
  _id: ObjectId;
  question: string;
  options: OptionDto[];
}
