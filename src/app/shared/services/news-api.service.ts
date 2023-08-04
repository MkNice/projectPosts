import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  constructor(public http: HttpClient) {}

  public getArticle(): Observable<IResponse> {
    const URL = '/v4/articles/';

    return this.http.get<IResponse>(URL);
  }

  public getFilteredArticle(filterValue: string): Observable<IResponse> {
    const URL = '/v4/articles/';

    let params = new HttpParams();
    params = params.set('search', filterValue);

    return this.http.get<IResponse>(URL, { params });
  }
}
