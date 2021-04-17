import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  @Input() carouselItems: Array<string>;
  @Input() dataInterval: number;
  @Input() pauseOnFocus: boolean;
  @Input() pauseOnHover: boolean

  @Output() imageClicked: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('carouselRow', {static: true}) carouselRow: ElementRef;

  ngOnInit(): void {
    this.carouselRow.nativeElement.setAttribute('data-interval', this.dataInterval);
  }

  onImageClick(index: number): void {
    this.imageClicked.emit(index);
  }

}
