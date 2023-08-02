import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(public http: HttpClient) { }

  public getArticle(): Observable<IResponse>{
    const URL = '/v4/articles/';

    return this.http.get<IResponse>(URL)
  }
}
