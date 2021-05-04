import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: []
})
export class NotFoundComponent implements OnInit {

  @Input() displayText: string;

  displayNotFoundText: string;

  ngOnInit(): void {
    this.displayNotFoundText = this.displayText || 'Stránka nebola nájdená';
  }

}
