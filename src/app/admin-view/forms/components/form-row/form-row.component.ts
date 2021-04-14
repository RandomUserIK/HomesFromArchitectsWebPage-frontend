import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import formData from '../../resources/create-project-data.json';
import {FormRowData} from '../../resources/form-data';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss']
})
export class FormRowComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  @Input() submitted : boolean;
  public form: FormGroup;
  public controlsFromJson: FormRowData[][] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({});
    formData.form.forEach(row => {
        const data = [];
        row.forEach(control => {
          this.form.addControl(control.formControlName, this.fb.control('', Validators.required));
          data.push(control as FormRowData);
        });
        this.controlsFromJson.push(data);
      }
    );
    this.formReady.emit(this.form);
  }
}
