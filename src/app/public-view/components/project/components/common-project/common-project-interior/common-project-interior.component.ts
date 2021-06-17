import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-common-project-interior',
  templateUrl: './common-project-interior.component.html'
})
export class CommonProjectInteriorComponent {

  @Input() projectImagePaths: Array<string>;

  constructor(private _router: Router) {
  }

  onLinkClick(): void {
    this._router.navigate(['/interierovy-dizajn']);
  }

}
