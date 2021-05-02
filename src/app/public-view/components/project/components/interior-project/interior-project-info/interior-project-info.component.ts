import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../../../models/project/project.model';

@Component({
  selector: 'app-interior-project-info',
  templateUrl: './interior-project-info.component.html',
  styleUrls: ['./interior-project-info.component.scss']
})
export class InteriorProjectInfoComponent implements OnInit {

  @Input() project: Project;

  ngOnInit(): void {
    registerLocaleData(localeSk, 'sk');
  }

}
