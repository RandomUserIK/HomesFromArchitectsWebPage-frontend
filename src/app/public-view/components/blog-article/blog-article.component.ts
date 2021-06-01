import {Component, OnInit} from '@angular/core';
import {BlogArticle} from '../../../models/blog/blog-article';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  public blogArticle: BlogArticle;

  constructor() {
  }

  ngOnInit(): void {
    console.log(history.state);
    this.blogArticle = history.state;
  }

}
