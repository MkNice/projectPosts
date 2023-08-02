import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IArticle } from 'src/app/shared/interfaces/article.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() public article: IArticle | any = {};

}
