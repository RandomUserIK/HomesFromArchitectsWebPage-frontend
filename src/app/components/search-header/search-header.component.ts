import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {ENUMERATION_FILTERS, EnumerationFilterModel} from './models/enumeration-filter-model';
import {SearchHeaderService} from './services/search-header.service';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  providers: [{provide: ENUMERATION_FILTERS, useValue: ENUMERATION_FILTERS}]
})
export class SearchHeaderComponent implements OnInit {

  searchForm: FormGroup;

  constructor(@Inject(ENUMERATION_FILTERS) public enumerationFilters: Array<EnumerationFilterModel>,
              private _searchHeaderService: SearchHeaderService) {
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      projectName: new FormControl(),
      enumerationFilters: new FormGroup(this.getEnumerationFilterIds()),
    });
    this.searchForm.valueChanges.subscribe(searchFormValue => {
      const query = this._searchHeaderService.buildQuery(searchFormValue);
      this._searchHeaderService.searchHeaderState.next(query);
    })
  }

  private getEnumerationFilterIds(): { [key: string]: AbstractControl } {
    const formControls: { [key: string]: AbstractControl } = {};
    for (const filter of this.enumerationFilters) {
      formControls[filter.formControlId] = new FormControl();
    }
    return formControls;
  }

  public resetFilters(): void {
    this.searchForm.reset();
  }
}
