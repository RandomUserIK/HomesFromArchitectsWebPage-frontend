import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-individual-project-image-gallery',
  templateUrl: './individual-project-image-gallery.component.html',
  styleUrls: ['./individual-project-image-gallery.component.scss']
})
export class IndividualProjectImageGalleryComponent {

  @Input() imagePaths: Array<string>;

}
