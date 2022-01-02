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
    // this.initializeTitleImage(form, blogArticle.titleImage); TODO
  }

  private initializePrimitiveFields(form: FormGroup, blogArticle: BlogArticle): void {
    form.get('title').setValue(blogArticle.title);
    form.get('description').setValue(blogArticle.description);
    form.get('content').setValue({ops: blogArticle.content});
  }

  private initializeTitleImage(form: FormGroup, titleImagePath: string): void {
    this._fileService.getFileFromPath(titleImagePath).subscribe((imageBlob) => {
      const file = new File([imageBlob], titleImagePath.split('/').pop());
      form.get('titleImage').setValue(file);
    });
  }

}
