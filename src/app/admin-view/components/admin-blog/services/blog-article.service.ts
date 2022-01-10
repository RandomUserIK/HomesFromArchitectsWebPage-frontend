import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {BlogService} from '../../../../services/blog.service';
import {DataField} from '../../../../components/data-fields/models/data-field';
import {RequestEntityPreparationService} from '../../../../services/request-entity-preparation.service';
import {BlogArticleMessageResource} from '../../../../models/web/response-bodies/blog/blog-article-message-resource';

@Injectable()
export class BlogArticleService {

  constructor(private _blogService: BlogService,
              private _preparationService: RequestEntityPreparationService) {
  }

  public submitBlogArticle(form: FormGroup,
                           formConfig: DataField[],
                           blogArticleId: number): Observable<BlogArticleMessageResource> {
    this._preparationService.prepareFormData(form, formConfig);
    if (blogArticleId) {
      this._preparationService.formData.append('id', blogArticleId.toString());
      return this._blogService.updateBlogArticle(this._preparationService.formData);
    } else {
      return this._blogService.createBlogArticle(this._preparationService.formData);
    }
  }

}
