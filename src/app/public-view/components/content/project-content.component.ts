import {Component, Inject, OnInit} from '@angular/core';
import {CONTENT_TEXT_SECTION_CONFIG, TextSectionGroupMap} from './resources/content-text-fields-injectable';
import {Router} from '@angular/router';
import {AutoScrollService} from '../../../services/auto-scroll.service';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
})
export class ProjectContentComponent implements OnInit {

  constructor(@Inject(CONTENT_TEXT_SECTION_CONFIG) public textSectionData: TextSectionGroupMap,
              public router: Router,
              private _scrollService: AutoScrollService) {
  }

  ngOnInit(): void {
    this._scrollService.scrollToTop();
  }

}
