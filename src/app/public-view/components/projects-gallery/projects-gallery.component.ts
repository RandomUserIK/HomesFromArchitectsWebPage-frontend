import {Component} from '@angular/core';
import {loadingAnimation} from './animations/loading.animation';
import {AbstractProjectGalleryDirective} from '../../../models/abstract-project-gallery';

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  animations: loadingAnimation
})
export class ProjectsGalleryComponent extends AbstractProjectGalleryDirective {
}
