import {Component, Input} from '@angular/core';
import {CommonProject} from '../../../../../models/project/common-project.model';

@Component({
  selector: 'app-project-price-comparison',
  templateUrl: './project-price-comparison.component.html',
  styleUrls: ['./project-price-comparison.component.scss']
})
export class ProjectPriceComparisonComponent {

  @Input() project: CommonProject;

}
