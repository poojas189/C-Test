import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop()
  question: String;

  @Prop(raw([{
    option: { type: String },
    isAnswer: { type: Boolean }
  }]))
  options: Record<string, any>;
}
export const QuestionSchema = SchemaFactory.createForClass(Question);