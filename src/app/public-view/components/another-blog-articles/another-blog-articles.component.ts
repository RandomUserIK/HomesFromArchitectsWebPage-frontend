import {Component, OnInit} from '@angular/core';
import {BlogArticle} from '../../../models/blog/blog-article';
import {BlogService} from '../../../services/blog.service';
import {FileService} from '../../../admin-view/services/file-service';
import {SafeUrl} from '@angular/platform-browser';
import {exhaustMap} from 'rxjs/operators';
import {Router} from '@angular/router';

interface BlogTitlePhotoAndID {
  titlePhoto: SafeUrl;
  title: string;
  id: number;
}

@Component({
  selector: 'app-another-blog-articles',
  templateUrl: './another-blog-articles.component.html',
  styleUrls: ['./another-blog-articles.component.scss']
})
export class AnotherBlogArticlesComponent implements OnInit {

  public blogsTitleImages: Array<BlogTitlePhotoAndID> = [];

  constructor(private _blogService: BlogService,
              private _fileService: FileService,
              private _router: Router) {
  }

  ngOnInit(): void {
    // TODO
    // this._blogService.getRandomBlogArticle(3).pipe(
    //   exhaustMap((data: any) => {
    //       return data.blogArticles.forEach((value: BlogArticle) => {
    //         this._fileService.getFileFromPathAsSafeUrl(value.titleImage).subscribe(
    //           (imageAsSafeUrl) => {
    //             this.blogsTitleImages.push({titlePhoto: imageAsSafeUrl, title: value.title, id: value.id});
    //           }
    //         );
    //       });
    //     }
    //   )).subscribe();
  }
}
