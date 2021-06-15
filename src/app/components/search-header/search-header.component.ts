import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {ENUMERATION_FILTERS, EnumerationFilterModel} from './models/enumeration-filter-model';
import {SearchHeaderService} from './services/search-header.service';
import {ProjectsGalleryStateService} from '../../public-view/components/projects-gallery/services/projects-gallery-state.service';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
  providers: [{provide: ENUMERATION_FILTERS, useValue: ENUMERATION_FILTERS}]
})
export class SearchHeaderComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(@Inject(ENUMERATION_FILTERS) public enumerationFilters: Array<EnumerationFilterModel>,
              private _searchHeaderService: SearchHeaderService,
              private _stateService: ProjectsGalleryStateService) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeFormSubscription();
  }

  public resetFilters(): void {
    this.searchForm.reset();
  }

  private initializeForm(): void {
    this.searchForm = new FormGroup({
      projectName: new FormControl(),
      enumerationFilters: new FormGroup(this.getEnumerationFilterIds()),
    });
    if (this._stateService.searchFormValue) {
      this.searchForm.setValue(this._stateService.searchFormValue);
    }
  }

  private initializeFormSubscription(): void {
    this.searchForm.valueChanges.subscribe((searchFormValue) => {
      this._stateService.searchFormValue = searchFormValue;
      const query = this._searchHeaderService.buildQuery(searchFormValue);
      this._searchHeaderService.searchHeaderState.next(query);
    });
  }

  private getEnumerationFilterIds(): { [key: string]: AbstractControl } {
    const formControls: { [key: string]: AbstractControl } = {};
    for (const filter of this.enumerationFilters) {
      formControls[filter.formControlId] = new FormControl();
    }
    return formControls;
  }

}
