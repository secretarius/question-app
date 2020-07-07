import { RootObject } from './questions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private _questionsUrl = 'assets/questions.json';

  constructor(private _http: HttpClient) {}

  getQuestions(): Observable<RootObject[]> {
    return this._http.get<RootObject[]>(this._questionsUrl)
    .pipe(
      tap(data => data)
    );
  }
}
