import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormRowData} from '../../models/form-data';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss']
})
export class FormRowComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  @Input() submitted: boolean;
  @Input() formData: FormRowData[];
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({});
    this.formData.forEach(control => {
        this.form.addControl(control.formControlName, this.fb.control('', Validators.required));
      }
    );
    this.formReady.emit(this.form);
  }

}
