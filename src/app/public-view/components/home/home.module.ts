import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ImageCarouselModule} from '../../../components/image-carousel/image-carousel.module';
import {ContactModule} from '../contact/contact.module';
import {HomeBubbleDescriptionComponent} from './components/home-bubble-description/home-bubble-description.component';
import {HomeIconsDescriptionComponent} from './components/home-icons-description/home-icons-description.component';
import {HomeIndividualProjectDescriptionComponent} from './components/home-individual-project-description/home-individual-project-description.component';
import {HomeInstagramGalleryComponent} from './components/home-instagram-gallery/home-instagram-gallery.component';
import {HomeInteriorDescriptionComponent} from './components/home-interior-description/home-interior-description.component';
import {HomeComponent} from './home.component';
import {instagramSearchInjectables} from './services/Instagram-search-injectables';
import {InstagramSearchService} from './services/instagram-search.service';
import { HomeImageCarouselComponent } from './components/home-image-carousel/home-image-carousel.component';
import {AnimateModule} from '../../../animate/animate.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBubbleDescriptionComponent,
    HomeIconsDescriptionComponent,
    HomeInteriorDescriptionComponent,
    HomeIndividualProjectDescriptionComponent,
    HomeInstagramGalleryComponent,
    HomeImageCarouselComponent,
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
        RouterModule,
        ImageCarouselModule,
        AnimateModule
    ]
})
export class HomeModule {
}
