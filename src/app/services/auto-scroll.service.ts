import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoScrollService {

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
