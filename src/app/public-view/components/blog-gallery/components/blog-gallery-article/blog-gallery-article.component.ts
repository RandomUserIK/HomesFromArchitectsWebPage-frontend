import {Component, Input, OnInit} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {FileService} from '../../../../../admin-view/services/file-service';
import {BlogArticle} from '../../../../../models/blog/blog-article';

@Component({
  selector: 'app-blog-gallery-article',
  templateUrl: './blog-gallery-article.component.html',
  styleUrls: ['./blog-gallery-article.component.scss']
})
export class BlogGalleryArticleComponent implements OnInit {

  @Input() blogArticle: BlogArticle;

  public titleImage: SafeUrl;
  public isLoading = false;

  constructor(private _router: Router,
              private _fileService: FileService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._fileService.getFileFromPathAsSafeUrl(this.blogArticle.titleImage).subscribe(
      (imageAsSafeUrl) => {
        this.titleImage = imageAsSafeUrl;
        this.isLoading = false;
      }
    );
  }

  public onBlogArticleImageClick(): void {
    this._router.navigate([`blog/${this.blogArticle.id}`]);
  }

}
