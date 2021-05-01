import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {Component, Input, OnInit} from '@angular/core';
import {CommonProject} from '../../../../../models/project/common-project.model';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  @Input() project: CommonProject;

  ngOnInit(): void {
    registerLocaleData(localeSk, 'sk');
  }

}
