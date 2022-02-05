import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHeaderService {

  private _searchHeaderState: Subject<string> = new Subject<string>();

  get searchHeaderState(): Subject<string> {
    return this._searchHeaderState;
  }

  public buildQuery(searchFormValue: any): string {
    if (!searchFormValue) {
      return '';
    }
    const title = searchFormValue.projectName &&
      `title=${searchFormValue.projectName}` ||
      null;
    const rooms = searchFormValue.enumerationFilters.rooms &&
      `rooms=${searchFormValue.enumerationFilters.rooms}` ||
      null;
    const hasGarage = searchFormValue.enumerationFilters.hasGarage &&
      `hasGarage=${searchFormValue.enumerationFilters.hasGarage}` ||
      null;
    const hasStorey = searchFormValue.enumerationFilters.hasStorey &&
      `hasStorey=${searchFormValue.enumerationFilters.hasStorey}` ||
      null;
    const queryParams = [title, rooms, hasGarage, hasStorey];

    return queryParams.filter((it) => it != null).join('&');
  }

}
