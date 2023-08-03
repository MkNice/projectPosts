import { Action, State, StateContext } from '@ngxs/store';

import { Injectable } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { catchError, tap } from 'rxjs';
import { GetArticle, GetArticleError } from './news.actions';

@State<any>({
  name: 'article',
  defaults: 'initialArticleState',
})
@Injectable()
export class ArticleState {
  constructor(private newsApiService: NewsApiService){}

  @Action(GetArticle)
  getArticle(ctx:StateContext<any>){
    return this.newsApiService.getArticle().pipe(
      tap((res)=>{
        const article = res.results;
        ctx.patchState({article})
      }),
      catchError((error)=>ctx.dispatch(new GetArticleError(error.message)))
    )
  }
}