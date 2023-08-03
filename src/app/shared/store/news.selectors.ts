import { Selector } from '@ngxs/store';
import { ArticleState } from './news.state';

export class ArticleSelectors {
  @Selector([ArticleState])
  static article(state: any) {
    return state.article;
  }

  @Selector([ArticleState])
  static error(state: any) {
    return state.error;
  }
}
