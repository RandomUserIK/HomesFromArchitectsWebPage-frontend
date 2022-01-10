import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ImageModel} from '../../../../../../models/project/image-model';

@Component({
  selector: 'app-common-project-interior',
  templateUrl: './common-project-interior.component.html'
})
export class CommonProjectInteriorComponent {

  @Input() imageModels: Array<ImageModel>;

  constructor(private _router: Router) {
  }

  public onLinkClick(): void {
    this._router.navigate(['/interierovy-dizajn']);
  }

}
