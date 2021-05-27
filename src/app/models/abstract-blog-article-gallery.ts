import {Directive, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {AutoScrollService} from '../services/auto-scroll.service';
import {BlogService} from '../services/blog.service';
import {AbstractGallery} from './abstract-gallery';
import {BlogArticle} from './blog/blog-article';
import {PageableBlogArticleMessageResource} from './web/response-bodies/blog/pageable-blog-article-message-resource';

@Directive()
export abstract class AbstractBlogArticleGalleryDirective extends AbstractGallery implements OnInit {

  public blogArticles: Array<BlogArticle> = [];

  constructor(protected autoScrollService: AutoScrollService,
              protected activatedRoute: ActivatedRoute,
              protected blogService: BlogService) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        switchMap(data => {
          this.autoScrollService.scrollToTop();
          return this.handleBlogArticleList(1);
        })
      ).subscribe(this.processData());
  }

  public onPageChange(): void {
    this.handleBlogArticleList(this.currentPage).subscribe(this.processData());
  }

  private handleBlogArticleList(currentPage: number): Observable<PageableBlogArticleMessageResource> {
    this.loading = true;
    this.autoScrollService.scrollToTop();
    return this.blogService.getBlogArticlesOnPage(currentPage - 1, this.pageSize);
  }

  private processData() {
    return (data) => {
      this.blogArticles = data.blogArticles;
      this.currentPage = data.currentPage + 1;
      this.totalElements = data.totalElements;
      this.loading = false;
    };
  }

}
