import { ChangeDetectionStrategy, Component, Input,OnInit } from '@angular/core';
import { IArticle } from 'src/app/shared/interfaces/article.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  @Input() public articles: IArticle[] = [];
}
