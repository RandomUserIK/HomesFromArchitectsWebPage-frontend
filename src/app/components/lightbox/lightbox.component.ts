import {Component, Input, OnInit} from '@angular/core';
import {IAlbum, Lightbox, LightboxConfig} from 'ngx-lightbox';
import {FileService} from '../../admin-view/services/file-service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent implements OnInit {

  @Input() imagePaths: Array<string>;
  @Input() dataInterval: number;
  @Input() pauseOnFocus: boolean;
  @Input() pauseOnHover: boolean
  @Input() shouldDisplayAnimation: boolean;

  public isLoading = false;
  private lightBoxImages: Array<IAlbum>;

  constructor(private _lightbox: Lightbox,
              private _lightboxConfig: LightboxConfig,
              private _fileService: FileService) {
  }

  ngOnInit(): void {
    this.lightBoxImages = [];
    this._lightboxConfig.positionFromTop = 150;
    this.imagePaths.forEach((imagePath) => {
      this.isLoading = true;
      this._fileService.getFileFromPath(imagePath).subscribe((image) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
          const asStr = reader.result as string;
          console.log(asStr);
          this.lightBoxImages.push({
            // TODO: temporary
            // TODO: consider fetching an image from backend as base64
            src: asStr.replace('data:application/octet-stream;base64,', 'data:image/png;base64,'),
            caption: '',
            thumb: ''
          });
        }
        this.isLoading = false;
      });
    });
  }

  onImageClick(index: number): void {
    this._lightbox.open(this.lightBoxImages, index);
  }

  onClose(): void {
    this._lightbox.close();
  }

}
