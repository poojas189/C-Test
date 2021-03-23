import { ObjectId } from "mongoose";

export class OptionDto {
  _id: ObjectId;
  option: string;
  isAnswer: boolean
}