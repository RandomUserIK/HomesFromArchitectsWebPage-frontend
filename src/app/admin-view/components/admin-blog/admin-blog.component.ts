import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuillModules} from 'ngx-quill';
import {Delta} from 'quill';
import {Observable, of} from 'rxjs';
import {AutoScrollService} from '../../../services/auto-scroll.service';
import {BlogService} from '../../../services/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  public readonly EDITOR_CONTROL = 'editor';
  public readonly FORMAT = 'object';
  public readonly PLACEHOLDER = 'Napíšte obsah príspevku'
  public form: FormGroup;
  public modules: QuillModules;
  public validationSuccess: boolean;
  public isLoading: boolean;
  public uploadMessage: string;

  constructor(private _blogService: BlogService,
              private _autoScrollService: AutoScrollService) {
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.uploadMessage = '';
    this.form = new FormGroup({});
    this.initializeEditorToolbar();
    this.insertEditorAsFormControl();
  }

  public onSubmit(): void {
    this.isLoading = true;
    if (this.form.valid) {
      this._blogService.createBlogArticle(this.form.get(this.EDITOR_CONTROL).value).subscribe(
        () => {
          this.isLoading = false;
          this.form.reset();
          this.validationSuccess = true;
          this.uploadMessage = 'Príspevok bol úspešne vytvorený';
        },
        () => {
          this.isLoading = false;
          this.uploadMessage = 'Príspevok sa nepodarilo vytvoriť, skúste neskôr';
        });
    } else {
      this.isLoading = false;
      this.uploadMessage = 'Pole s obsahom príspevku je nesprávne vyplnené';
    }
    this._autoScrollService.scrollToTop();
  }

  private initializeEditorToolbar(): void {
    // TODO: this ought to be initialized in a more convenient manner
    this.modules = {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{header: 1}, {header: 2}],
          [{list: 'ordered'}, {list: 'bullet'}],
          [{script: 'sub'}, {script: 'super'}],
          [{indent: '-1'}, {indent: '+1'}],
          [{direction: 'rtl'}],
          [{size: ['small', false, 'large', 'huge']}],
          [{header: [1, 2, 3, 4, 5, 6, false]}],
          [{color: []}, {background: []}],
          [{font: []}],
          [{align: []}],
          ['clean'],
          ['link', 'image']
        ]
      }
    }
  }

  private insertEditorAsFormControl(): void {
    this.form.addControl(this.EDITOR_CONTROL, new FormControl(null, Validators.required));
  }

}
