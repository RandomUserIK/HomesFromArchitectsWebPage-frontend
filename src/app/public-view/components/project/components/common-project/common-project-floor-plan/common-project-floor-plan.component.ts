import {Component, Input} from '@angular/core';
import {CommonProject} from '../../../../../../models/project/common-project.model';

@Component({
  selector: 'app-common-project-floor-plan',
  templateUrl: './common-project-floor-plan.component.html',
  styleUrls: ['./common-project-floor-plan.component.scss']
})
export class CommonProjectFloorPlanComponent {

  @Input() project: CommonProject;

}
