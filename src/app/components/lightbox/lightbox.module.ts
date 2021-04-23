import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ImageCarouselModule} from '../image-carousel/image-carousel.module';
import {LightboxComponent} from './lightbox.component';
import {LightboxModule as ngxLightbox} from 'ngx-lightbox';

@NgModule({
  declarations: [
    LightboxComponent
  ],
  imports: [
    CommonModule,
    ImageCarouselModule,
    ngxLightbox
  ],
  exports: [
    LightboxComponent
  ]
})
export class LightboxModule {
}
