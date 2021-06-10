import {Directive, Injector, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {AutoScrollService} from '../services/auto-scroll.service';
import {BlogService} from '../services/blog.service';
import {AbstractGallery} from './abstract-gallery';
import {BlogArticle} from './blog/blog-article';
import {PageableBlogArticleMessageResource} from './web/response-bodies/blog/pageable-blog-article-message-resource';
import {BlogGalleryStateService} from '../public-view/components/blog-gallery/services/blog-gallery-state.service';

@Directive()
export abstract class AbstractBlogArticleGalleryDirective extends AbstractGallery implements OnInit {

  public stateService: BlogGalleryStateService;
  private autoScrollService: AutoScrollService;
  private activatedRoute: ActivatedRoute;
  private blogService: BlogService;
  public blogArticles: Array<BlogArticle> = [];
  public isGalleryPreview = false;

  protected constructor(injector: Injector) {
    super();
    this.stateService = injector.get(BlogGalleryStateService);
    this.autoScrollService = injector.get(AutoScrollService);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.blogService = injector.get(BlogService);
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        switchMap(() => {
          this.autoScrollService.scrollToTop();
          return this.handleBlogArticleList(this.stateService.currentPage);
        })
      ).subscribe(this.processData());
  }

  public onPageChange(): void {
    this.handleBlogArticleList(this.stateService.currentPage).subscribe(this.processData());
  }

  private handleBlogArticleList(currentPage: number): Observable<PageableBlogArticleMessageResource> {
    this.isLoading = true;
    return this.blogService.getBlogArticlesOnPage(currentPage - 1, this.pageSize, this.isGalleryPreview);
  }

  private processData(): (data: any) => void {
    return (data) => {
      this.blogArticles = data.blogArticles;
      this.totalElements = data.totalElements;
      this.isLoading = false;
    };
  }

}
