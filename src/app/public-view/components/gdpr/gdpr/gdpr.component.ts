import { Component, OnInit } from '@angular/core';
import {GdprTextSection} from '../components/models/GdprTextSection';
import data from 'src/app/public-view/components/gdpr/components/models/gdpr-data.json';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.scss']
})
export class GdprComponent{

  public prepareGDPRTexts() : GdprTextSection[]{
    return (data as GdprTextSection[]);
  }
}
