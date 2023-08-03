import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { DestroyService } from 'src/app/shared/services/destroy.service';
import { GetArticle } from 'src/app/shared/store/news.actions';
import { ArticleSelectors } from 'src/app/shared/store/news.selectors';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[DestroyService]
})
export class NewsComponent implements OnInit {
  @Select(ArticleSelectors.article)
  public articles$!: Observable<IArticle[]>;
  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.dispatch(new GetArticle());
  }
}
