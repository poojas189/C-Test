import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getRandomQuestionsForTest(): Observable<Question[]> {
    return this.http.get<Question[]>('http://localhost:3000/questions');
  }
}
