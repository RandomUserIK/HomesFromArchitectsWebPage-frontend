import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-common-project-floor-plan',
  templateUrl: './common-project-floor-plan.component.html',
  styleUrls: ['./common-project-floor-plan.component.scss']
})
export class CommonProjectFloorPlanComponent {

  @Input() floorPlanImages: Array<string>;

}
