import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-empty-search-result',
  templateUrl: './empty-search-result.component.html',
  styleUrls: ['./empty-search-result.component.scss']
})
export class EmptySearchResultComponent {

  @Input() displayText: string;

}
