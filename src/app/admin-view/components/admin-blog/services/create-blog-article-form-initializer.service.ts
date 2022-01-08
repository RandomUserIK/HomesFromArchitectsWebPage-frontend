import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BlogArticle} from '../../../../models/blog/blog-article';
import {FileService} from '../../../services/file-service';
import {ImageService} from '../../../../services/image.service';

@Injectable()
export class CreateBlogArticleFormInitializerService {

  constructor(private _fileService: FileService,
              private _imageService: ImageService) {
  }

  public initializeForm(form: FormGroup, blogArticle: BlogArticle) {
    this.initializePrimitiveFields(form, blogArticle);
    this.initializeTitleImage(form, blogArticle.titleImage.id.toString());
  }

  private initializePrimitiveFields(form: FormGroup, blogArticle: BlogArticle): void {
    form.get('title').setValue(blogArticle.title);
    form.get('description').setValue(blogArticle.description);
    form.get('content').setValue({ops: blogArticle.content});
  }

  private initializeTitleImage(form: FormGroup, imageId: string): void {
    this._imageService.getImageAsBlob(imageId).subscribe(
      (imageFile: Blob) => form.get('titleImage').setValue(imageFile));
  }

}
