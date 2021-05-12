import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-common-project-image-carousel',
  templateUrl: './common-project-image-carousel.component.html'
})
export class CommonProjectImageCarouselComponent {

  @Input() imagePaths: Array<string>;

}
