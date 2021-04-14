import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormEnumerationData} from '../../models/form-data';

@Component({
  selector: 'app-form-enumeration',
  templateUrl: './form-enumeration.component.html',
  styleUrls: ['./form-enumeration.component.scss']
})
export class FormEnumerationComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  @Input() submitted: boolean;
  @Input() formData: FormEnumerationData[];
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.formData)
    this.form = this.fb.group({});
    this.formData.forEach(control => {
      this.form.addControl(control.formControlName, this.fb.control('', Validators.required));
    });
    this.formReady.emit(this.form);
  }

}
