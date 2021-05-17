import {Component, Inject} from '@angular/core';
import {CONTENT_TEXT_SECTION_CONFIG, TextSectionGroupMap} from './resources/content-text-fields-injectable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent {

  constructor(@Inject(CONTENT_TEXT_SECTION_CONFIG) public textSectionData: TextSectionGroupMap,
              public router: Router) { }

}
