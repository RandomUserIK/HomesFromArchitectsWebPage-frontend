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
  public imagesAsSafeUrl: Array<SafeUrl> | Array<CarouselProject>

  constructor(private _fileService: FileService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.imagesAsSafeUrl = [];
    if (this.carouselItems.length > 0) {
      if (typeof this.carouselItems[0] === 'string') {
        this.withText = false;
        this._fileService.getAllImagesAsSafeUrl((this.carouselItems as Array<string>))
          .subscribe((result) => {
            this.imagesAsSafeUrl = result;
            this.isLoading = false;
          });
      } else {
        this.withText = true;
        (this.carouselItems as Array<CarouselProject>).forEach(value => {
          this._fileService.getFileFromPathAsSafeUrl(value.image as string).subscribe(safeUrl => {
            console.log(safeUrl)
            value.image = safeUrl;
          })
        })
        this.imagesAsSafeUrl = this.carouselItems;
        this.isLoading = false;
      }
    }
  }

  public onImageClick(index: number): void {
    this.imageClicked.emit(index);
  }

}
