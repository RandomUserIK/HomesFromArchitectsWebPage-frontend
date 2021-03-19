import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeImageCarouselComponent} from "./home-image-carousel/home-image-carousel.component";
import {HomeComponent} from "./home.component";
import {HomeBubbleDescriptionComponent} from "./home-bubble-description/home-bubble-description.component";
import {HomeIconsDescriptionComponent} from "./home-icons-description/home-icons-description.component";
import {HomeInteriorDescriptionComponent} from "./home-interior-description/home-interior-description.component";
import {HomeIndividualProjectDescriptionComponent} from "./home-individual-project-description/home-individual-project-description.component";
import {InstagramSearchService} from "./services/instagram-search.service";
import {youTubeSearchInjectables} from "./services/InstagramSearchInjectables";
import { HomeInstagramGalleryComponent } from './home-instagram-gallery/home-instagram-gallery.component';
import { HomeContactComponent } from './home-contact/home-contact.component';



@NgModule({
  declarations: [
    HomeImageCarouselComponent,
    HomeComponent,
    HomeBubbleDescriptionComponent,
    HomeIconsDescriptionComponent,
    HomeInteriorDescriptionComponent,
    HomeIndividualProjectDescriptionComponent,
    HomeInstagramGalleryComponent,
    HomeContactComponent,
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    InstagramSearchService,
    youTubeSearchInjectables
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
