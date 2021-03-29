import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchValue = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  doSearch(value: string) {
    this.searchValue.emit(value);
  }

}
