import {Component, Input} from '@angular/core';
import {CatalogueProject} from '../../../../../models/project/catalogue-project.model';

@Component({
  selector: 'app-project-price-comparison',
  templateUrl: './project-price-comparison.component.html',
  styleUrls: ['./project-price-comparison.component.scss']
})
export class ProjectPriceComparisonComponent {

  @Input() project: CatalogueProject;

}
