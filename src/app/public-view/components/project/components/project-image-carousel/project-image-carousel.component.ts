import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-image-carousel',
  templateUrl: './project-image-carousel.component.html'
})
export class ProjectImageCarouselComponent {

  @Input() imagePaths: Array<string>;

}
