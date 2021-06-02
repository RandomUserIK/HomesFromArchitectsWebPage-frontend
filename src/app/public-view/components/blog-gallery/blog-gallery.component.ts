import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AbstractBlogArticleGalleryDirective} from '../../../models/abstract-blog-article-gallery';
import {AutoScrollService} from '../../../services/auto-scroll.service';
import {BlogService} from '../../../services/blog.service';
import {loadingAnimation} from '../projects-gallery/animations/loading.animation';

@Component({
  selector: 'app-blog-gallery',
  templateUrl: './blog-gallery.component.html',
  animations: loadingAnimation
})
export class BlogGalleryComponent extends AbstractBlogArticleGalleryDirective implements OnInit {

  public readonly blogArticlesNotFoundMessage = 'NEPODARILO SA NÁJSŤ ŽIADNE PRÍSPEVKY';

  constructor(autoScrollService: AutoScrollService,
              activatedRoute: ActivatedRoute,
              blogService: BlogService) {
    super(autoScrollService, activatedRoute, blogService);
  }

  ngOnInit(): void {
    this.isGalleryPreview = true;
    super.ngOnInit();
  }

}
