import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {BlogArticle} from '../../../../../models/blog/blog-article';
import {BlogService} from '../../../../../services/blog.service';
import {AdminGalleryElement} from '../../../admin-gallery/admin-gallery';

@Component({
  selector: 'app-admin-blog-article',
  templateUrl: './admin-blog-article.component.html',
  styleUrls: ['./admin-blog-article.component.scss']
})
export class AdminBlogArticleComponent implements AdminGalleryElement {

  @Input() blogArticle: BlogArticle;
  @Output() blogArticleRemoved: EventEmitter<number> = new EventEmitter();

  constructor(private _blogService: BlogService,
              private _router: Router) {
  }

  edit(): void {
    this._router.navigate(['admin/blog/prispevok'],
      {
        state: {blogArticle: this.blogArticle}
      });
  }

  remove(): void {
    if (confirm(`Ste si istý, že chcete vymazať príspevok ${this.blogArticle.title}?`)) {
      this._blogService.removeBlogArticle(this.blogArticle.id).subscribe(
        () => {
          this.blogArticleRemoved.emit(this.blogArticle.id);
        },
        () => {
          this.blogArticleRemoved.emit(undefined);
        }
      );
    }
  }

}
