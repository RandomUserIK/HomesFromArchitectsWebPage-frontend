import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  public title: string;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.title = this._route.snapshot.params.id;
  }

}
