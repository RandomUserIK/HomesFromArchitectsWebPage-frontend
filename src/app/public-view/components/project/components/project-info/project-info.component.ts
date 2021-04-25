import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {Component, Input, OnInit} from '@angular/core';
import {CatalogueProject} from '../../../../../models/project/catalogue-project.model';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  @Input() project: CatalogueProject;

  ngOnInit(): void {
    registerLocaleData(localeSk, 'sk');
  }

}
