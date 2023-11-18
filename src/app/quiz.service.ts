import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'assets/quiz.json';

  constructor(private http: HttpClient) { }

  getQuiz(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

