import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/newsModule/article/article.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './components/newsModule/news/news.component';
import { FilterComponent } from './components/newsModule/filter/filter.component';
import { PostComponent } from './components/newsModule/post/post.component';
import { PostsComponent } from './components/newsModule/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    PostsComponent,
    PostComponent,
    ArticleComponent,
    NewsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
