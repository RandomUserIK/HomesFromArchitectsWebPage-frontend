import {Component, Inject, Input, OnInit} from '@angular/core';
import {RECAPTCHA_KEY_INJECTABLE} from '../../../../configuration/resources/recaptcha-key-injectable';
import {FormControl, FormGroup} from '@angular/forms';
import {DataField} from '../../models/data-field';

@Component({
  selector: 'app-recaptcha-field',
  templateUrl: './recaptcha-field.component.html',
  styleUrls: ['./recaptcha-field.component.scss']
})
export class RecaptchaFieldComponent implements OnInit {


  @Input() dataField: DataField;
  @Input() form: FormGroup;

  constructor(@Inject(RECAPTCHA_KEY_INJECTABLE) public recaptchaKey) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setControl(this.dataField.formControlName, new FormControl(null, this.dataField.validator));
    })
  }

}
