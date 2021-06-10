import {Component, Injector, OnInit} from '@angular/core';
import {AbstractBlogArticleGalleryDirective} from '../../../models/abstract-blog-article-gallery';
import {loadingAnimation} from '../projects-gallery/animations/loading.animation';

@Component({
  selector: 'app-blog-gallery',
  templateUrl: './blog-gallery.component.html',
  animations: loadingAnimation
})
export class BlogGalleryComponent extends AbstractBlogArticleGalleryDirective implements OnInit {

  public readonly blogArticlesNotFoundMessage = 'NEPODARILO SA NÁJSŤ ŽIADNE PRÍSPEVKY';

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.isGalleryPreview = true;
    super.ngOnInit();
  }

}
