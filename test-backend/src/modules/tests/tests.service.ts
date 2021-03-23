import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test, TestDocument } from 'src/modules/tests/schema/test.schema';
import { TestDto } from './dto/test.dto';

@Injectable()
export class TestsService {

  constructor(@InjectModel(Test.name) private testModal: Model<TestDocument>) { }

  async create(testDto: TestDto): Promise<Test> {

    // calculate result
    let result = 0;
    Object.keys(testDto.selectedAnswers).forEach(key => {
      let foundQue = testDto.questions.find(q => q._id.toString() == key);
      let correctAns = foundQue.options.find(a => a.isAnswer);
      if (correctAns._id === testDto.selectedAnswers[key]) {
        // correct answer by user
        result++;
      }
    });

    let count = await this.testModal.count();
    const createdTest = new this.testModal({
      name: "Test " + (count + 1),
      questions: testDto.questions,
      selectedAnswers: testDto.selectedAnswers,
      date: new Date(),
      result: result,
      duration: testDto.duration
    });

    // save test to db
    return createdTest.save();
  }

  async findAll(): Promise<Test[]> {
    return this.testModal.find().exec();
  }
}
