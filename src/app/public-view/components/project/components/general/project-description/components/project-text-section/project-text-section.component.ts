import {Component, Input} from '@angular/core';
import {TextSection} from '../../../../../../../../models/project/text-section.model';

@Component({
  selector: 'app-project-text-section',
  templateUrl: './project-text-section.component.html',
  styleUrls: ['./project-text-section.component.scss']
})
export class ProjectTextSectionComponent {

  @Input() textSection: TextSection;

}
