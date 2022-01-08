import {Component, OnInit} from '@angular/core';
import {BlogArticle} from '../../../models/blog/blog-article';
import {BlogService} from '../../../services/blog.service';
import {Router} from '@angular/router';
import {ImageService} from '../../../services/image.service';

interface BlogTitleImageAndId {
  titleImage: string;
  title: string;
  id: number;
}

@Component({
  selector: 'app-another-blog-articles',
  templateUrl: './another-blog-articles.component.html',
  styleUrls: ['./another-blog-articles.component.scss']
})
export class AnotherBlogArticlesComponent implements OnInit {

  public blogTitleImages: Array<BlogTitleImageAndId> = [];

  constructor(private _blogService: BlogService,
              private _imageService: ImageService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._blogService.getRandomBlogArticle(3).subscribe((data: any) => {
      return data.blogArticles.forEach((value: BlogArticle) => {
        const imageUrl = this._imageService.getImageFullUrl(value.titleImage.id.toString());
        this.blogTitleImages.push({titleImage: imageUrl, title: value.title, id: value.id});
      });
    });
  }
}
