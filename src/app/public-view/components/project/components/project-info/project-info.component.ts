import {Component, Input, OnInit} from '@angular/core';
import {ProjectData} from '../../../../../admin-view/models/project-data';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  @Input() project: ProjectData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
