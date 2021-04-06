import {Component, Input, OnInit} from '@angular/core';
import {ProjectData} from '../../../../../models/project-data';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {

  @Input()
  project: ProjectData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
