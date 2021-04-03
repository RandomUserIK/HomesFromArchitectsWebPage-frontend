import {Component, Input, OnInit} from '@angular/core';
import {DropDownFilterModel} from '../../models/drop-down-filter-model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-drop-down-filter',
  templateUrl: './drop-down-filter.component.html',
  styleUrls: ['./drop-down-filter.component.scss']
})
export class DropDownFilterComponent implements OnInit {

  @Input()
  dropDownFilter: DropDownFilterModel;
  formControlsNames: Array<string> = [];

  constructor() {
  }

  ngOnInit(): void {
    // Object.keys((this.dropDownFilter.formGroup as FormGroup).controls).map((key) => {
    //   this.formControlsNames.push(key);
    // });
  }

}
