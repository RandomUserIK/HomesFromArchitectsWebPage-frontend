import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BlogArticle} from '../../../../../models/blog/blog-article';
import {ImageService} from '../../../../../services/image.service';

@Component({
  selector: 'app-blog-gallery-article',
  templateUrl: './blog-gallery-article.component.html',
  styleUrls: ['./blog-gallery-article.component.scss']
})
export class BlogGalleryArticleComponent implements OnInit {

  @Input() blogArticle: BlogArticle;

  public titleImage: string;
  public isLoading = false;

  constructor(private _router: Router,
              private _imageService: ImageService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.titleImage = this._imageService.getImageFullUrl(this.blogArticle.titleImage.id.toString());
    this.isLoading = false;
  }

  public onBlogArticleClick(): void {
    this._router.navigate([`blog/${this.blogArticle.id}`]);
  }

}
