import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type TestDocument = Test & Document;

@Schema()
export class Test {

  @Prop()
  name: String;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }] })
  questions: mongoose.Schema.Types.ObjectId[];

  @Prop({ type: Object})
  selectedAnswers: Object;

  @Prop()
  date: Date;

  @Prop()
  result: Number;

  @Prop()
  duration: Number; // in seconds
}

export const TestSchema = SchemaFactory.createForClass(Test);