import { ChangeDetectionStrategy, ChangeDetectorRef, Component,OnInit } from '@angular/core';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { IResponse } from 'src/app/shared/interfaces/response.interface';
import { NewsApiService } from 'src/app/shared/services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit{

  public articles: IArticle[] = []

  constructor(private newsApiService: NewsApiService, private cdr: ChangeDetectorRef){}

  public ngOnInit(): void {
    this.newsApiService.getArticle().subscribe((data: IResponse)=>{
      console.log(data);
      this.articles = data.results;
      this.cdr.detectChanges()
    });

  }
}
