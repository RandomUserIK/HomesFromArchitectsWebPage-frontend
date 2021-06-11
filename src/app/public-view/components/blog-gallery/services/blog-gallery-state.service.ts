import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogGalleryStateService {

  private _currentPage = 1;

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(value: number) {
    this._currentPage = value;
  }

}
