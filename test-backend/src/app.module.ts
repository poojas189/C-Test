import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './modules/questions/questions.module';
import { TestsModule } from './modules/tests/tests.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/testApp'),
    QuestionsModule,
    TestsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
