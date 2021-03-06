import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DataField} from '../../models/data-field';

@Component({
  selector: 'app-submit-button-field',
  templateUrl: './submit-button-field.component.html'
})
export class SubmitButtonFieldComponent {

  @Input() form: FormGroup;
  @Input() dataField: DataField;

}
