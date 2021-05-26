import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {FileService} from '../../admin-view/services/file-service';

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
  @Input() shouldDisplayAnimation: boolean;

  @Output() imageClicked: EventEmitter<number> = new EventEmitter<number>();

  public isLoading = false;
  public imagesAsSafeUrl: Array<SafeUrl>;

  constructor(private _fileService: FileService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.imagesAsSafeUrl = [];
    this._fileService.getAllImagesAsSafeUrl(this.carouselItems).subscribe((result) => {
      this.imagesAsSafeUrl = result;
      this.isLoading = false;
    });
  }

  public onImageClick(index: number): void {
    this.imageClicked.emit(index);
  }

}
