import {Component, Input, OnInit} from '@angular/core';
import {DataField} from '../../models/data-field';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-fields-group',
  templateUrl: './data-fields-group.component.html',
  styleUrls: ['./data-fields-group.component.scss']
})
export class DataFieldsGroupComponent implements OnInit {

  @Input() dataGroup: DataField[];
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
