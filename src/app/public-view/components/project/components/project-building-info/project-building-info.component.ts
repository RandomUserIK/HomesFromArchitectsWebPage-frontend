import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {Component, Input, OnInit} from '@angular/core';
import {CommonProject} from '../../../../../models/project/common-project.model';

@Component({
  selector: 'app-project-building-info',
  templateUrl: './project-building-info.component.html',
  styleUrls: ['./project-building-info.component.scss']
})
export class ProjectBuildingInfoComponent implements OnInit {

  @Input() project: CommonProject;

  ngOnInit(): void {
    registerLocaleData(localeSk, 'sk');
  }

}
