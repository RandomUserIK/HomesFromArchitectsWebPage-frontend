import { Component, OnInit } from '@angular/core';
import {GdprTextSection} from '../components/models/GdprTextSection';
import data from 'src/app/public-view/components/gdpr/components/models/gdpr-data.json';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.scss']
})
export class GdprComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public prepareGDPRTexts() : GdprTextSection[]{
    return (data as GdprTextSection[]);
  }
}
