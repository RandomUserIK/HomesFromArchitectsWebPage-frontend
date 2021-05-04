import {Component, Input, OnInit} from '@angular/core';
import {TextSection} from '../../resources/content-data';

@Component({
  selector: 'app-content-text-section',
  templateUrl: './content-text-section.component.html',
  styleUrls: ['./content-text-section.component.scss']
})
export class ContentTextSectionComponent implements OnInit {
  @Input() dataGroup: TextSection;

  constructor() { }

  ngOnInit(): void {
  }
}
