import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionsService } from './questions.service';
import { Question } from './schema/question.schema';

@Controller('questions')
export class QuestionsController {

  constructor(private questionService: QuestionsService) { }

  // create question
  @Post()
  async create(@Body() questionDto: QuestionDto): Promise<Question> {
    return this.questionService.create(questionDto);
  }

  // get random 4 questions for test
  @Get()
  async findForTest(): Promise<Question[]> {
    return this.questionService.findForTest();
  }

}
