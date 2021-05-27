import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractBlogArticleGalleryDirective} from '../../../models/abstract-blog-article-gallery';
import {AutoScrollService} from '../../../services/auto-scroll.service';
import {BlogService} from '../../../services/blog.service';
import {AdminGallery} from '../admin-gallery/admin-gallery';

@Component({
  selector: 'app-admin-blog-articles-gallery',
  templateUrl: './admin-blog-articles-gallery.component.html'
})
export class AdminBlogArticlesGalleryComponent extends AbstractBlogArticleGalleryDirective implements AdminGallery {

  public message: string;
  public isBlogArticleRemoved: boolean;

  constructor(autoScrollService: AutoScrollService,
              activatedRoute: ActivatedRoute,
              blogService: BlogService,
              private _router: Router) {
    super(autoScrollService, activatedRoute, blogService);
  }

  public add(): void {
    this._router.navigate(['admin/blog/prispevok']);
  }

  public remove(blogArticleId: number): void {
    if (blogArticleId === undefined) {
      this.message = 'Príspevok sa nepodarilo odstrániť';
      this.isBlogArticleRemoved = false;
    } else {
      this.blogArticles = this.blogArticles.filter((blogArticle) => blogArticle.id !== blogArticleId);
      this.message = 'Príspevok sa podarilo odstrániť';
      this.isBlogArticleRemoved = true;
    }
  }

}
