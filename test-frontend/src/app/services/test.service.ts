import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getRandomQuestionsForTest(): Observable<Question[]> {
    return this.http.get<Question[]>('http://localhost:3000/questions');
  }

  createTest(test: Test) {
    return this.http.post('http://localhost:3000/tests', test);
  }

  getAllTests(): Observable<Test[]> {
    return this.http.get<Test[]>('http://localhost:3000/tests');
  }
}
