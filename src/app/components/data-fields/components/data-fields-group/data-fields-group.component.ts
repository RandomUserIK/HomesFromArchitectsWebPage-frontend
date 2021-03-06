import {Component, Input} from '@angular/core';
import {DataField} from '../../models/data-field';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-fields-group',
  templateUrl: './data-fields-group.component.html'
})
export class DataFieldsGroupComponent  {

  @Input() dataGroup: DataField[];
  @Input() form: FormGroup;

}
