import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsGalleryStateService {

  private _currentPage = 1;
  private _searchFormValue: any;


  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(value: number) {
    this._currentPage = value;
  }

  get searchFormValue(): any {
    return this._searchFormValue;
  }

  set searchFormValue(value: any) {
    this._searchFormValue = value;
  }
}
