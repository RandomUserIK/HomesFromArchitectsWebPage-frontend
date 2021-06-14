import {Component, OnInit} from '@angular/core';
import {AutoScrollService} from '../../../services/auto-scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private _scrollService: AutoScrollService) {
  }

  ngOnInit(): void {
    this._scrollService.scrollToTop();
  }


}
