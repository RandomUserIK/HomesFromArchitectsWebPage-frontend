import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-interior-description',
  templateUrl: './home-interior-description.component.html',
  styleUrls: ['./home-interior-description.component.scss']
})
export class HomeInteriorDescriptionComponent {

  constructor(private _router: Router) {
  }

  onLinkClick(): void {
    this._router.navigate(['/interierovy-dizajn']);
  }

}
