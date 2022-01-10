import {Component, Input} from '@angular/core';
import {ImageModel} from '../../../../../../models/project/image-model';

@Component({
  selector: 'app-common-project-image-carousel',
  templateUrl: './common-project-image-carousel.component.html'
})
export class CommonProjectImageCarouselComponent {

  @Input() imageModels: Array<ImageModel>;

}
