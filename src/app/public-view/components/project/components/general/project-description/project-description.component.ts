import {Component, Input} from '@angular/core';
import {TextSection} from '../../../../../../models/project/text-section.model';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent {

  @Input() textSections: Array<TextSection>;

}
