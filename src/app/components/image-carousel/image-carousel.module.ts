import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageCarouselComponent} from './image-carousel.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ImageCarouselComponent
  ],
    imports: [
        CommonModule,
        NgbCarouselModule,
        RouterModule
    ],
  exports: [
    ImageCarouselComponent
  ]
})
export class ImageCarouselModule { }
