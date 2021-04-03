import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {DropDownFilterModel} from './models/drop-down-filter-model';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  searchForm: FormGroup;
  dropDownFilters: Array<DropDownFilterModel> = [
    {
      formControlId: 'houseType',
      title: 'Typ domu',
      values: ['bungalow', 'storey']
    },
    {
      formControlId: 'price',
      title: 'Cena',
      values: ['100000', '200000', '300000']
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'projectName': new FormControl(),
      // 'enumerationFilters': new FormGroup({
      //   'houseType': new FormControl(),
      //   'price': new FormControl()
      // }),
      'enumerationFilters': new FormGroup(this.getDropdownFilterIds()),
    });

    this.searchForm.valueChanges.subscribe(value => console.log(value))
  }

  get enumerationFilters() {
    const filters = []
    Object.keys((this.searchForm.get('enumerationFilters') as FormGroup).controls).map((key) => {
      filters.push(key)
    });
    return filters;
  }

  private getDropdownFilterIds(): { [key: string]: AbstractControl } {
    let formControls: { [key: string]: AbstractControl } = {};
    for (let filter of this.dropDownFilters) {
      formControls[filter.formControlId] = new FormControl();
    }
    console.log(formControls)
    return formControls;
  }

}
