import {Component, Input, OnInit} from '@angular/core';
import {TextSection} from '../../resources/content-data';

@Component({
  selector: 'app-extended-content',
  templateUrl: './extended-content.component.html',
  styleUrls: ['./extended-content.component.scss']
})
export class ExtendedContentComponent implements OnInit {

  @Input() dataGroup: TextSection;
  constructor() { }

  ngOnInit(): void {
  }

}
