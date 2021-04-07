import {Component} from '@angular/core';
import {loadingAnimation} from './animations/loading.animation';
import {AbstractProjectGallery} from '../../../models/abstract-project-gallery';

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss'],
  animations: loadingAnimation
})
export class ProjectsGalleryComponent extends AbstractProjectGallery {
}
