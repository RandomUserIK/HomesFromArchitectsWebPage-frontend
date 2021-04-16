import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-image-carousel',
  templateUrl: './project-image-carousel.component.html',
  styleUrls: ['./project-image-carousel.component.scss']
})
export class ProjectImageCarouselComponent {

  @Input() imagePaths: Array<string>;

}
