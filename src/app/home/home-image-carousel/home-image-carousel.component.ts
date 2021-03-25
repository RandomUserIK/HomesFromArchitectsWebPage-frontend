import {Component} from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './home-image-carousel.component.html',
  styleUrls: ['./home-image-carousel.component.scss']
})
export class HomeImageCarouselComponent {

  carouselItems = ['slide1.png', 'slide2.png'];

}
