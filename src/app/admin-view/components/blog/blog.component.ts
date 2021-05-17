import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {QuillModules} from 'ngx-quill';
import {Delta} from 'quill';
import {Observable, of} from 'rxjs';
import {AutoScrollService} from '../../../services/auto-scroll.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public readonly EDITOR_CONTROL = 'editor';
  public readonly FORMAT = 'object';
  public article: Delta;
  public form: FormGroup;
  public modules: QuillModules;
  public validationSuccess: boolean;
  public isLoading: boolean;
  public uploadMessage: string;

  constructor(private _autoScrollService: AutoScrollService) {
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.uploadMessage = '';
    this.form = new FormGroup({});
    this.initializeEditorToolbar();
    this.insertEditorFormControl();
  }

  public onSubmit(): void {
    this.isLoading = true;
    if (this.form.valid) {
      this.submitDummyFunc().subscribe(
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

  private insertEditorFormControl(): void {
    this.form.addControl(this.EDITOR_CONTROL, new FormControl(this.article, [Validators.required]));
    this.form.get(this.EDITOR_CONTROL).valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  private submitDummyFunc(): Observable<boolean> {
    return of(true);
  }

}
