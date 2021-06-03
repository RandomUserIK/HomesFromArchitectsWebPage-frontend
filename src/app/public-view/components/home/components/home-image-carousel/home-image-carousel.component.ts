import {Component} from '@angular/core';

@Component({
  selector: 'app-home-image-carousel',
  templateUrl: './home-image-carousel.component.html'
})
export class HomeImageCarouselComponent {
  carouselItems = ['assets/slide1.png', 'assets/slide2.png'];
}
