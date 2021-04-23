import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-interior',
  templateUrl: './project-interior.component.html',
  styleUrls: ['./project-interior.component.scss']
})
export class ProjectInteriorComponent {

  @Input() projectPhotoPaths: Array<string>;

}