import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageCarouselComponent} from './image-carousel.component';

@NgModule({
  declarations: [
    ImageCarouselComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [
    ImageCarouselComponent
  ]
})
export class ImageCarouselModule { }
