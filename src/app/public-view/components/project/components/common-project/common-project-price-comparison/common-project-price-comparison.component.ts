import {Component, Input} from '@angular/core';
import {CommonProject} from '../../../../../../models/project/common-project.model';

@Component({
  selector: 'app-common-project-price-comparison',
  templateUrl: './common-project-price-comparison.component.html',
  styleUrls: ['./common-project-price-comparison.component.scss']
})
export class CommonProjectPriceComparisonComponent {

  @Input() project: CommonProject;

}
