import {Component, Input} from '@angular/core';
import {CommonProject} from '../../../../../models/project/common-project.model';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent {

  // TODO: this will be generalized once the views for other components are finished
  @Input() project: CommonProject;

}
