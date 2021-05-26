import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IAlbum, Lightbox, LightboxConfig} from 'ngx-lightbox';
import {Subscription} from 'rxjs';
import {LightboxService} from './services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  providers: [LightboxService]
})
export class LightboxComponent implements OnInit, OnDestroy {

  @Input() imagePaths: Array<string>;
  @Input() dataInterval: number;
  @Input() pauseOnFocus: boolean;
  @Input() pauseOnHover: boolean
  @Input() shouldDisplayAnimation: boolean;

  public isLoading = false;
  private _lightBoxImages: Array<IAlbum>;
  private _imageEncodedSub: Subscription;

  constructor(private _lightbox: Lightbox,
              private _lightboxConfig: LightboxConfig,
              private _lightboxService: LightboxService) {
  }

  ngOnInit(): void {
    this._lightboxConfig.positionFromTop = 150;
    this._lightBoxImages = [];
    this._imageEncodedSub = this._lightboxService.imageEncoded.subscribe((imageEncoded) => {
      this._lightBoxImages.push({
        src: imageEncoded,
        caption: '',
        thumb: ''
      });
      this.isLoading = false;
    });
    this.imagePaths.forEach((imagePath) => {
      this.isLoading = true;
      this._lightboxService.encodeImage(imagePath);
    });
  }

  ngOnDestroy(): void {
    this._imageEncodedSub.unsubscribe();
  }

  public onImageClick(index: number): void {
    this._lightbox.open(this._lightBoxImages, index);
  }

  public onClose(): void {
    this._lightbox.close();
  }

}
