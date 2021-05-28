import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataGroupMap} from '../../../components/data-fields/models/data-group-map';
import {BlogArticle} from '../../../models/blog/blog-article';
import {AutoScrollService} from '../../../services/auto-scroll.service';
import {BLOG_ARTICLE_DATA_FIELDS_CONFIG} from './resources/blog-article-data-fields-injectable';
import {CreateBlogArticleFormInitializerService} from './services/create-blog-article-form-initializer.service';
import {CreateBlogArticleService} from './services/create-blog-article.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit, AfterViewInit {

  public form: FormGroup;
  public validationSuccess: boolean;
  public uploadMessage: string;
  public isLoading: boolean;
  public blogArticleId: number;

  constructor(private _createBlogArticleService: CreateBlogArticleService,
              private _createBlogArticleFormInitializerService: CreateBlogArticleFormInitializerService,
              private _autoScrollService: AutoScrollService,
              @Inject(BLOG_ARTICLE_DATA_FIELDS_CONFIG) public blogArticleDataFieldsConfig: DataGroupMap) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({});
  }

  ngAfterViewInit(): void {
    const blogArticle = history.state.blogArticle;
    if (blogArticle) {
      this.initializeForm(blogArticle);
    }
  }

  public onSubmit(): void {
    this.isLoading = true;
    this._createBlogArticleService.createBlogArticle(this.form, this.blogArticleId).subscribe(
      () => {
        this.validationSuccess = true;
        this.uploadMessage = this.blogArticleId ?
          'Príspevok bol úspešne aktualizovaný' :
          'Príspevok bol úspešne vytvorený';
        this.isLoading = false;
        this.form.reset();
        this._autoScrollService.scrollToTop();
      },
      () => {
        this.validationSuccess = false;
        this.uploadMessage = this.blogArticleId ?
          'Príspevok sa nepodarilo aktualizovať' :
          'Príspevok sa nepodarilo vytvoriť';
        this.isLoading = false;
        this._autoScrollService.scrollToTop();
      }
    );
  }

  private initializeForm(blogArticle: BlogArticle): void {
    setTimeout(() => {
      this.blogArticleId = blogArticle.id;
      this._createBlogArticleFormInitializerService.initializeForm(this.form, blogArticle);
    });
  }

}
