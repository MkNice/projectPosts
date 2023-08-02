import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ArticleComponent } from './article/article.component';
import { FilterComponent } from './filter/filter.component';
import { NewsComponent } from './news/news.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    FilterComponent,
    PostsComponent,
    PostComponent,
    ArticleComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class NewsModuleModule { }