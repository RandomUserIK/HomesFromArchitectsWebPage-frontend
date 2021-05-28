import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {QuillModules} from 'ngx-quill';
import {DataField} from '../../models/data-field';

@Component({
  selector: 'app-text-editor-field',
  templateUrl: './text-editor-field.component.html'
})
export class TextEditorFieldComponent implements OnInit {

  private readonly DEFAULT_FORMAT = 'object';
  private readonly DEFAULT_PLACEHOLDER = 'Napíšte obsah príspevku'

  @Input() dataField: DataField;
  @Input() form: FormGroup;
  @Input() modules?: QuillModules;
  @Input() placeholder?: string;
  @Input() format?: 'object' | 'html' | 'json' | 'text';

  ngOnInit(): void {
    this.configureEditor();

    setTimeout(() => {
      this.form.setControl(this.dataField.formControlName, new FormControl(null, this.dataField.validator));
    })
  }

  private configureEditor(): void {
    if (!this.modules) {
      this.setDefaultModulesConfiguration();
    }

    if (!this.placeholder) {
      this.setDefaultPlaceholder();
    }

    if (!this.format) {
      this.setDefaultFormat();
    }
  }

  private setDefaultFormat(): void {
    this.format = this.DEFAULT_FORMAT;
  }

  private setDefaultPlaceholder(): void {
    this.placeholder = this.DEFAULT_PLACEHOLDER;
  }

  private setDefaultModulesConfiguration(): void {
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
    };
  }

}
