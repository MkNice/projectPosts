import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit{
  public data: any = null;
  public URL: string = 'https://api.spaceflightnewsapi.net';
  constructor(public http: HttpClient){}

  public ngOnInit(): void {
    this.http.get(this.URL + '/v4/articles/').subscribe((data)=>{
      this.data = data;
      console.log(data);
    })
  }
}
