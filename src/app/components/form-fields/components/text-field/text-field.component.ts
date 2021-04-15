import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataField} from '../../models/data-field';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;


  ngOnInit(): void {
    this.form.setControl(this.dataField.formControlName, new FormControl());
  }

}
