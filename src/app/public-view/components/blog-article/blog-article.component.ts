import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogArticle} from '../../../models/blog/blog-article';
import {BlogService} from '../../../services/blog.service';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  public isLoading = false;
  public blogArticle: BlogArticle;
  public error: Error;
  public blogArticleNotFoundMessage = 'Príspevok nebol nájdený';

  constructor(private _blogService: BlogService,
              private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const blogArticleId = +this._route.snapshot.params.id;
    this.isLoading = true;
    this._blogService.getBlogArticle(blogArticleId).subscribe(
      (result) => {
        this.blogArticle = result.blogArticle;
        this.isLoading = false;
      },
      (err) => {
        this.error = err;
        this.isLoading = false;
      }
    );
  }

}
