import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {

  @Input() carouselItems: Array<string>;
  @Input() dataInterval: number;
  @Input() pauseOnFocus: boolean;
  @Input() pauseOnHover: boolean
  @Input() shouldDisplayAnimation: boolean;

  @Output() imageClicked: EventEmitter<number> = new EventEmitter<number>();

  onImageClick(index: number): void {
    this.imageClicked.emit(index);
  }

}
