import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {FileService} from '../../admin-view/services/file-service';
import {CarouselProject} from '../../public-view/components/home/models/CarouselProject';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  @Input() carouselItems: Array<string> | Array<CarouselProject>;
  public withText: boolean;
  @Input() dataInterval: number;
  @Input() pauseOnFocus: boolean;
  @Input() pauseOnHover: boolean;
  @Input() shouldDisplayAnimation: boolean;
  @Output() imageClicked: EventEmitter<number> = new EventEmitter<number>();

  public isLoading = false;
  public carouselData: Array<SafeUrl> | Array<CarouselProject>

  constructor(private _fileService: FileService) {
  }

  private prepareSafeUrlArrayForCarousel(): void {
    this.withText = false;
    this._fileService.getAllImagesAsSafeUrl((this.carouselItems as Array<string>))
      .subscribe((result) => {
        this.carouselData = result;
        this.isLoading = false;
      });
  }

  private prepareCarouselProjectArrayForCarousel(): void {
    this.withText = true;
    (this.carouselItems as Array<CarouselProject>).forEach(value => {
      this._fileService.getFileFromPathAsSafeUrl(value.image as string)
        .subscribe(safeUrl => {
          value.image = safeUrl;
        })
    })
    this.carouselData = this.carouselItems;
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.carouselData = [];
    if (typeof this.carouselItems[0] === 'string') {
      this.prepareSafeUrlArrayForCarousel()
    } else {
      this.prepareCarouselProjectArrayForCarousel()
    }
  }

  public onImageClick(index: number): void {
    this.imageClicked.emit(index);
  }

}
