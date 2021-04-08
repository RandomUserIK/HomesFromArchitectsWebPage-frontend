import {Component} from '@angular/core';
import {AbstractProjectGalleryDirective} from '../../../models/abstract-project-gallery';

@Component({
  selector: 'app-admin-projects-gallery',
  templateUrl: './admin-projects-gallery.component.html',
  styleUrls: ['./admin-projects-gallery.scss']
})
export class AdminProjectsGalleryComponent extends AbstractProjectGalleryDirective {

}
