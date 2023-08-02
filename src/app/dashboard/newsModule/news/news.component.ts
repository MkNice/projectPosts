import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { IResponse } from 'src/app/shared/interfaces/response.interface';
import { DestroyService } from 'src/app/shared/services/destroy.service';
import { NewsApiService } from 'src/app/shared/services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  public articles: IArticle[] = [];

  constructor(private newsApiService: NewsApiService, private cdr: ChangeDetectorRef, private destroy$: DestroyService,) { }

  public ngOnInit(): void {
    this.newsApiService.getArticle()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((data: IResponse) => {
        this.articles = data.results;
        this.cdr.detectChanges();
      });

  }
}
