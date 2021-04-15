import {Component, Input, OnInit} from '@angular/core';
import {DataField} from '../../models/data-field';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-enumeration-field',
  templateUrl: './enumeration-field.component.html',
  styleUrls: ['./enumeration-field.component.scss']
})
export class EnumerationFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;

  ngOnInit(): void {
    this.form.setControl(this.dataField.formControlName, new FormControl());
  }

}
