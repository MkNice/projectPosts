export class GetArticle {
  static readonly type = '[Article] Get article ';
}

export class GetArticleSuccess {
  static readonly type = '[Article] Get article  - Success';

  constructor(public article: any) {}
}

export class GetArticleError {
  static readonly type = '[Article] Get article Error';

  constructor(public error: string) {}
}
