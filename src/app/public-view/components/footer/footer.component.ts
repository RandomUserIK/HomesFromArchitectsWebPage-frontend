import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private _router: Router) {
  }

  public onLinkClick(): void {
    this._router.navigate(['/gdpr']);
  }

}
