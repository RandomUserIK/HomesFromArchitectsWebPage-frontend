import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EmptySearchResultComponent} from './empty-search-result.component';


@NgModule({
  declarations: [
    EmptySearchResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmptySearchResultComponent
  ]
})
export class EmptySearchResultModule {
}
