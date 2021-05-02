import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: []
})
export class NotFoundComponent {

  @Input() displayText: string;

}
