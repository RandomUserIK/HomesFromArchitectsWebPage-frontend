import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeImageCarouselComponent} from './components/home-image-carousel/home-image-carousel.component';
import {HomeComponent} from './home.component';
import {HomeBubbleDescriptionComponent} from './components/home-bubble-description/home-bubble-description.component';
import {HomeIconsDescriptionComponent} from './components/home-icons-description/home-icons-description.component';
import {HomeInteriorDescriptionComponent} from './components/home-interior-description/home-interior-description.component';
import {HomeIndividualProjectDescriptionComponent} from './components/home-individual-project-description/home-individual-project-description.component';
import {InstagramSearchService} from './services/instagram-search.service';
import {instagramSearchInjectables} from './services/Instagram-search-injectables';
import {HomeInstagramGalleryComponent} from './components/home-instagram-gallery/home-instagram-gallery.component';
import {ContactModule} from '../contact/contact.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HomeImageCarouselComponent,
    HomeComponent,
    HomeBubbleDescriptionComponent,
    HomeIconsDescriptionComponent,
    HomeInteriorDescriptionComponent,
    HomeIndividualProjectDescriptionComponent,
    HomeInstagramGalleryComponent,
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    InstagramSearchService,
    instagramSearchInjectables
  ],
  imports: [
    CommonModule,
    ContactModule,
    RouterModule
  ]
})
export class HomeModule {
}
