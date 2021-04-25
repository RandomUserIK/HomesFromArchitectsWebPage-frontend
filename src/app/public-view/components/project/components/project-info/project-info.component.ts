import {Component, Input, OnInit} from '@angular/core';
import {ProjectData} from '../../../../../models/project-data';
import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  @Input() project: ProjectData;

  ngOnInit(): void {
    registerLocaleData(localeSk, 'sk');
  }

}
