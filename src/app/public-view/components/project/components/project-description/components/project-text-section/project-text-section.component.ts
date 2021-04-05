import {Component, Input, OnInit} from '@angular/core';
import {TextSection} from '../../../../../../../admin-view/models/project-data';

@Component({
  selector: 'app-project-text-section',
  templateUrl: './project-text-section.component.html',
  styleUrls: ['./project-text-section.component.scss']
})
export class ProjectTextSectionComponent implements OnInit {

  @Input() textSection: TextSection;

  constructor() {
  }

  ngOnInit(): void {
  }

}
