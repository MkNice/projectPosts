import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/newsModule/article/article.component';
import { NewsComponent } from './components/newsModule/news/news.component';

const routes: Routes = [
  { path: 'home', component: NewsComponent },
  { path: 'article', component: ArticleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
