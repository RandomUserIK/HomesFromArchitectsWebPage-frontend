import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataField} from '../../../components/data-fields/models/data-field';
import {DataGroupMap} from '../../../components/data-fields/models/data-group-map';
import {AutoScrollService} from '../../../services/auto-scroll.service';
import {BlogService} from '../../../services/blog.service';
import {BLOG_ARTICLE_DATA_FIELDS_CONFIG} from './resources/blog-article-data-fields-injectable';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  public form: FormGroup;
  public validationSuccess: boolean;
  public uploadMessage: string;
  private submitButtonField: DataField;

  constructor(private _blogService: BlogService,
              private _autoScrollService: AutoScrollService,
              @Inject(BLOG_ARTICLE_DATA_FIELDS_CONFIG) public blogArticleDataFieldsConfig: DataGroupMap) {
  }

  ngOnInit(): void {
    this.submitButtonField = this.blogArticleDataFieldsConfig.formGroup.find(field => field.formControlName === 'submitButton');
    this.form = new FormGroup({});
  }

  public onSubmit(): void {
    this.submitButtonField.loading = true;
    this._blogService.createBlogArticle(this.form.value).subscribe(
      () => {
        this.validationSuccess = true;
        this.uploadMessage = 'Príspevok bol úspešne vytvorený';
        this.submitButtonField.loading = false;
        this.form.reset();
        this._autoScrollService.scrollToTop();
      },
      () => {
        this.validationSuccess = false;
        this.uploadMessage = 'Príspevok sa nepodarilo vytvoriť';
        this.submitButtonField.loading = false;
        this._autoScrollService.scrollToTop();
      }
    );
  }

}
