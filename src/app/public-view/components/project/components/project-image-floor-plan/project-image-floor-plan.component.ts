import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-image-floor-plan',
  templateUrl: './project-image-floor-plan.component.html',
  styleUrls: ['./project-image-floor-plan.component.scss']
})
export class ProjectImageFloorPlanComponent implements OnInit {

  @Input() floorPlanImagePath: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
