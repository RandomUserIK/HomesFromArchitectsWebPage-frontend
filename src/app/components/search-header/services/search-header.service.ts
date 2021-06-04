import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHeaderService {

  private _searchHeaderState: BehaviorSubject<string> = new BehaviorSubject<string>('');

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
    const personsCount = searchFormValue.enumerationFilters.persons &&
      `persons=${searchFormValue.enumerationFilters.persons}` ||
      null;
    const price = searchFormValue.enumerationFilters.price &&
      `price=${searchFormValue.enumerationFilters.price}` ||
      null;
    let queryParams = [title, personsCount, price];

    queryParams = queryParams.filter((it) => it != null);

    return queryParams.join('&');
  }

}
