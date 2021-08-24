import {Component} from '@angular/core';


@Component({
  selector: 'app-home-image-carousel',
  templateUrl: './home-image-carousel.component.html',
  styleUrls: ['./home-image-carousel.component.scss']
})
export class HomeImageCarouselComponent {
  images = ['assets/slide1.png', 'assets/slide2.png'];
}
