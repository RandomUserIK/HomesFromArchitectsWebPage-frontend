import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {Component, Input, OnInit} from '@angular/core';
import {ProjectData} from '../../../../../models/project-data';

@Component({
  selector: 'app-project-building-info',
  templateUrl: './project-building-info.component.html',
  styleUrls: ['./project-building-info.component.scss']
})
export class ProjectBuildingInfoComponent implements OnInit {

  @Input() project: ProjectData;

  ngOnInit(): void {
    registerLocaleData(localeSk, 'sk');
  }

}
