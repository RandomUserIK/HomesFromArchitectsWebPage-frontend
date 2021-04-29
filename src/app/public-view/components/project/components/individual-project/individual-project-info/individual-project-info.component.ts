import {Component, Input} from '@angular/core';
import {Project} from '../../../../../../models/project/project.model';

@Component({
  selector: 'app-individual-project-info',
  templateUrl: './individual-project-info.component.html',
  styleUrls: ['./individual-project-info.component.scss']
})
export class IndividualProjectInfoComponent {

  @Input() project: Project;

}
