import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BlogArticle} from '../../../../models/blog/blog-article';
import {ImageService} from '../../../../services/image.service';

@Injectable()
export class CreateBlogArticleFormInitializerService {

  constructor(private _imageService: ImageService) {
  }

  public initializeForm(form: FormGroup, blogArticle: BlogArticle) {
    this.initializePrimitiveFields(form, blogArticle);
    this.initializeTitleImage(form, blogArticle.titleImage.id.toString(), blogArticle.titleImage.title);
  }

  private initializePrimitiveFields(form: FormGroup, blogArticle: BlogArticle): void {
    form.get('title').setValue(blogArticle.title);
    form.get('description').setValue(blogArticle.description);
    form.get('content').setValue({ops: blogArticle.content});
  }

  private initializeTitleImage(form: FormGroup, imageId: string, imageTitle: string): void {
    this._imageService.getImageAsFile(imageId, imageTitle).subscribe(
      (imageFile: File) => form.get('titleImage').setValue(imageFile));
  }

}
