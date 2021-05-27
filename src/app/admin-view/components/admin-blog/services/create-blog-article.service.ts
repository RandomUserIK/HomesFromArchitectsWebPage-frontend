import {Injectable} from '@angular/core';
import {BlogService} from '../../../../services/blog.service';

@Injectable()
export class CreateBlogArticleService {

  // TODO:
  constructor(private _blogService: BlogService) {
  }

}
