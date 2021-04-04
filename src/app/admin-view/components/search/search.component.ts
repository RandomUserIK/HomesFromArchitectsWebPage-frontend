import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {


  form = new FormGroup({
    searchInput: new FormControl('')
  });

  get getSearchInput() {
    return this.form.controls.searchInput.value;
  }

  @Output() searchValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.form.controls.searchInput.valueChanges.subscribe(
      value => this.searchValue.emit(value)
    );
  }

  public doSearch(value: string) {
    this.searchValue.emit(value);
  }

}
