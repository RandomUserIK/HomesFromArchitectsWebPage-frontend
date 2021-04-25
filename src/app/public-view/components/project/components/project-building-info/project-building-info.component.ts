import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {Component, Input, OnInit} from '@angular/core';
import {CatalogueProject} from '../../../../../models/project/catalogue-project.model';

@Component({
  selector: 'app-project-building-info',
  templateUrl: './project-building-info.component.html',
  styleUrls: ['./project-building-info.component.scss']
})
export class ProjectBuildingInfoComponent implements OnInit {

  @Input() project: CatalogueProject;

  ngOnInit(): void {
    registerLocaleData(localeSk, 'sk');
  }

}
