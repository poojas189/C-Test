import { Body, Controller, Get, Post } from '@nestjs/common';
import { Test } from 'src/modules/tests/schema/test.schema';
import { TestDto } from './dto/test.dto';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private testService: TestsService) { }

  @Post()
  async create(@Body() testDto: TestDto): Promise<Test> {
    return this.testService.create(testDto);
  }

  @Get()
  async findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }
}
