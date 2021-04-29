import {Component, Inject, OnInit} from '@angular/core';
import {CONTENT_TEXT_SECTION_CONFIG, TextSectionGroupMap} from './resources/content-text-fields-injectable';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {

  constructor(@Inject(CONTENT_TEXT_SECTION_CONFIG) public textSectionData: TextSectionGroupMap) { }

  ngOnInit(): void {
  }

}
