import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageCarouselComponent } from './home/image-carousel/image-carousel.component';
import { HomeComponent } from './home/home.component';
import { HomeBubbleDescriptionComponent } from './home/home-bubble-description/home-bubble-description.component';
import { IconsDescriptionComponent } from './home/icons-description/icons-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageCarouselComponent,
    HomeComponent,
    HomeBubbleDescriptionComponent,
    IconsDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
