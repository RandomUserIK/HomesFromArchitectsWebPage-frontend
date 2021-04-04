import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {ENUMERATION_FILTERS, EnumerationFilterModel} from './models/enumeration-filter-model';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
  providers: [{provide: ENUMERATION_FILTERS, useValue: ENUMERATION_FILTERS}]
})
export class SearchHeaderComponent implements OnInit {

  searchForm: FormGroup;

  constructor(@Inject(ENUMERATION_FILTERS) public enumerationFilters: Array<EnumerationFilterModel>) {
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'projectName': new FormControl(),
      'enumerationFilters': new FormGroup(this.getEnumerationFilterIds()),
    });

    this.searchForm.valueChanges.subscribe(value => console.log(value))
  }

  private getEnumerationFilterIds(): { [key: string]: AbstractControl } {
    let formControls: { [key: string]: AbstractControl } = {};
    for (let filter of this.enumerationFilters) {
      formControls[filter.formControlId] = new FormControl();
    }
    return formControls;
  }

  public resetFilters(): void {
    this.searchForm.reset();
  }
}
