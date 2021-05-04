import {Component, Input} from '@angular/core';
import {TextSection} from '../../resources/content-data';

@Component({
  selector: 'app-extended-content-header',
  templateUrl: './extended-content-header.component.html',
  styleUrls: ['./extended-content-header.component.scss']
})
export class ExtendedContentHeaderComponent {
  public buttonClicked = false;
  @Input() completeTextSection: TextSection;
  @Input() orderStepsTextSection: TextSection;
}
