import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit {

  testForm: FormGroup;
  testQuestions: Question[];

  constructor(private testService: TestService,
    private fb: FormBuilder) {

    this.testForm = fb.group({
      name: ['', Validators.required],
      questions: this.fb.array([])
    })

  }

  ngOnInit(): void {
    this.testService.getRandomQuestionsForTest().subscribe(response => {
      console.log('**** response', response);
      this.testQuestions = response;
      let questionArray = new FormArray([]);
      this.testQuestions.forEach(element => {
        questionArray.push(new FormControl('', Validators.required));
      });
      console.log('**** response', this.testForm);
    })
  }

}
