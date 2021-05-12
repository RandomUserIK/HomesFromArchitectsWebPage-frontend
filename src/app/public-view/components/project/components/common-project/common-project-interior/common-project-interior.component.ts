import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-common-project-interior',
  templateUrl: './common-project-interior.component.html',
  styleUrls: ['./common-project-interior.component.scss']
})
export class CommonProjectInteriorComponent {

  @Input() projectImagePaths: Array<string>;

}
