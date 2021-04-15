import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataField} from '../../models/data-field';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-field-resolver',
  templateUrl: './data-field-resolver.component.html',
  styleUrls: ['./data-field-resolver.component.scss']
})
export class DataFieldResolverComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;
  @Output() formGroupReady = new EventEmitter<FormControl>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
