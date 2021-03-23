import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionDto } from './dto/question.dto';
import { Question, QuestionDocument } from './schema/question.schema';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) { }

  // create question
  async create(questionDto: QuestionDto): Promise<Question> {
    const createdQue = new this.questionModel(questionDto);
    return createdQue.save();
  }

  // get random 4 questions for test 
  async findForTest(): Promise<Question[]> {
    return this.questionModel.aggregate([{ $sample: { size: 4 } }]);
  }
}
