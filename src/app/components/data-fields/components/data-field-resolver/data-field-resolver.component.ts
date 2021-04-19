import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataField} from '../../models/data-field';
import {FormControl, FormGroup} from '@angular/forms';
import {DataFieldType} from '../../models/data-field-type.enum';

@Component({
  selector: 'app-data-field-resolver',
  templateUrl: './data-field-resolver.component.html'
})
export class DataFieldResolverComponent {

  @Input() dataField: DataField;
  @Input() form: FormGroup;
  @Output() formGroupReady = new EventEmitter<FormControl>();
  dataFieldType = DataFieldType;


}
