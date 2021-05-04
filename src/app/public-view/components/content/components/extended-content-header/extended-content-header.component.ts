import {Component, Input, OnInit} from '@angular/core';
import {TextSection} from '../../resources/content-data';

@Component({
  selector: 'app-extended-content-header',
  templateUrl: './extended-content-header.component.html',
  styleUrls: ['./extended-content-header.component.scss']
})
export class ExtendedContentHeaderComponent implements OnInit {
  public buttonClicked = false;
  @Input() completeContentDataGroup: TextSection;
  @Input() orderStepsDataGroup: TextSection;

  constructor() { }

  ngOnInit(): void {
  }

}
