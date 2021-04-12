import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormEnumerationData, FormRowData} from '../../resources/form-data';
import formData from '../../resources/create-project-data.json';

@Component({
  selector: 'app-form-enumeration',
  templateUrl: './form-enumeration.component.html',
  styleUrls: ['./form-enumeration.component.scss']
})
export class FormEnumerationComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  public form: FormGroup;
  @Input() submitted : boolean;
  public controlsFromJson: FormEnumerationData[][] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({});
    formData.enumerationFields.forEach(multichoice => {
        const data = [];
        multichoice.forEach(control => {
          this.form.addControl(control.formControlName, this.fb.control('', Validators.required));
          data.push(control as FormEnumerationData);
        });
        this.controlsFromJson.push(data);
      }
    );
    this.formReady.emit(this.form);
  }


}
