import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {Component, Input, OnInit} from '@angular/core';
import {CommonProject} from '../../../../../../models/project/common-project.model';

@Component({
  selector: 'app-common-project-building-info',
  templateUrl: './common-project-building-info.component.html',
  styleUrls: ['./common-project-building-info.component.scss']
})
export class CommonProjectBuildingInfoComponent implements OnInit {

  @Input() project: CommonProject;

  ngOnInit(): void {
    registerLocaleData(localeSk, 'sk');
  }

}
