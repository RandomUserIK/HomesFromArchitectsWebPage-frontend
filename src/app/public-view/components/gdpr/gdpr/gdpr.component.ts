import {Component, OnInit} from '@angular/core';
import data from 'src/app/public-view/components/gdpr/components/models/gdpr-data.json';
import {AutoScrollService} from '../../../../services/auto-scroll.service';
import {GdprTextSection} from '../components/models/GdprTextSection';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html'
})
export class GdprComponent implements OnInit {

  constructor(private _autoScrollService: AutoScrollService) {
  }

  ngOnInit(): void {
    this._autoScrollService.scrollToTop();
  }

  public prepareGDPRTexts(): GdprTextSection[] {
    return (data as GdprTextSection[]);
  }

}
