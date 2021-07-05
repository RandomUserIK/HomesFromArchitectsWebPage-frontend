import {Component, OnInit} from '@angular/core';
import {AutoScrollService} from '../../../services/auto-scroll.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact-form-wrapper.component.html'
})
export class ContactFormWrapperComponent implements OnInit {

  constructor(private _autoScrollService: AutoScrollService) {
  }

  ngOnInit(): void {
    this._autoScrollService.scrollToTop();
  }

}
