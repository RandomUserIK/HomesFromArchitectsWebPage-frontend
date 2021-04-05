import {Component, Input, OnInit} from '@angular/core';
import {TextSection} from '../../../../../admin-view/models/project-data';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  @Input() textSections: Array<TextSection>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
