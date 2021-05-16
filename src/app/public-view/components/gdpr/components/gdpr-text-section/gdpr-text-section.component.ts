import {Component, Input, OnInit} from '@angular/core';
import {GdprTextSection} from '../models/GdprTextSection';

@Component({
  selector: 'app-gdpr-text-section',
  templateUrl: './gdpr-text-section.component.html',
  styleUrls: ['./gdpr-text-section.component.scss']
})
export class GdprTextSectionComponent implements OnInit {

  @Input() gdprTextSections: GdprTextSection[];

  constructor() {}

  ngOnInit(): void {
  }

}
