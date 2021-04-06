import {Component, Input, OnInit} from '@angular/core';
import {ProjectData} from '../../../../../admin-view/models/project-data';

@Component({
  selector: 'app-project-price-comparison',
  templateUrl: './project-price-comparison.component.html',
  styleUrls: ['./project-price-comparison.component.scss']
})
export class ProjectPriceComparisonComponent implements OnInit {

  @Input() project: ProjectData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
