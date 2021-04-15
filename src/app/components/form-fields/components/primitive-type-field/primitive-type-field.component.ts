import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataField} from '../../models/data-field';

@Component({
  selector: 'app-primitive-type-field',
  templateUrl: './primitive-type-field.component.html',
  styleUrls: ['./primitive-type-field.component.scss']
})
export class PrimitiveTypeFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;


  ngOnInit(): void {
    this.form.setControl(this.dataField.formControlName, new FormControl());
  }

}
