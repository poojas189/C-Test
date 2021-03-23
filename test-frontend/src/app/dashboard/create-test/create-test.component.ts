import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Question } from 'src/app/models/question';
import { Test } from 'src/app/models/test';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit {

  testQuestions: Question[];
  selectedAnswers: any = {};
  startTime: number;

  constructor(private testService: TestService,
    private ref: MatDialogRef<CreateTestComponent>) {
  }

  ngOnInit(): void {
    this.startTime = Date.now();
    // fetch questions for test
    this.testService.getRandomQuestionsForTest().subscribe(response => {
      this.testQuestions = response;
      this.testQuestions.forEach(element => {
        this.selectedAnswers[element._id] = "";
      });
    })
  }

  saveTest() {
    // perform save test here
    let test = new Test();
    test.questions = this.testQuestions;
    test.selectedAnswers = this.selectedAnswers;
    test.duration = Math.round((Date.now() - this.startTime) / (1000));

    this.testService.createTest(test).subscribe(res => {
      this.ref.close();
    }, error => {

    });

  }

}
