import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Delta} from 'quill';
import {Observable} from 'rxjs';
import {exhaustMap, map} from 'rxjs/operators';
import {ImageType} from '../../../../components/data-fields/models/image-type.enum';
import {BlogArticle} from '../../../../models/blog/blog-article';
import {ImageFile} from '../../../../models/image/image-file.model';
import {BlogService} from '../../../../services/blog.service';
import {FileService} from '../../../services/file-service';

@Injectable()
export class CreateBlogArticleService {

  private blogArticleRequestEntity: BlogArticle;
  private blogArticleTitleImage: ImageFile;

  constructor(private _blogService: BlogService,
              private _httpClient: HttpClient,
              private _fileService: FileService) {
  }

  public createBlogArticle(form: FormGroup, blogArticleId?: number): Observable<string> {
    this.blogArticleRequestEntity = {};
    this.blogArticleTitleImage = {};
    this.resolveFormData(form, blogArticleId);
    return this.sendBlogArticleData();
  }

  private resolveFormData(form: FormGroup, blogArticleId?: number): void {
    this.blogArticleRequestEntity = {
      id: blogArticleId,
      title: form.get('title').value,
      titleImage: '',
      content: (form.get('content').value as Delta).ops
    };

    this.blogArticleTitleImage = {
      value: form.get('titleImage').value,
      type: ImageType.BLOG_ARTICLE_TITLE_IMAGE
    };
  }

  private sendBlogArticleData(): Observable<string> {
    return this._blogService.createBlogArticle(this.blogArticleRequestEntity)
      .pipe(
        exhaustMap((blogArticleMessageResource) =>
          this._fileService.postFile(
            this.blogArticleTitleImage.value,
            blogArticleMessageResource.blogArticle.id,
            this.blogArticleTitleImage.type
          )
        ),
        map((imageUploadMessageResource) => imageUploadMessageResource.filePath)
      );
  }

}
