import {Component, Input, OnInit} from '@angular/core';
import {IAlbum, Lightbox, LightboxConfig} from 'ngx-lightbox';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent implements OnInit {

  @Input() imagePaths: Array<string>;
  @Input() dataInterval: number;
  @Input() pauseOnFocus: boolean;
  @Input() pauseOnHover: boolean

  lightBoxImages: Array<IAlbum> = [];

  constructor(private _lightbox: Lightbox,
              private _lightboxConfig: LightboxConfig) {
  }

  ngOnInit(): void {
    this._lightboxConfig.positionFromTop = 150;
    this.imagePaths.forEach((imagePath) => {
      // TODO: remove 'assets/'
      this.lightBoxImages.push({
        src: 'assets/' + imagePath,
        caption: '',
        thumb: ''
      })
    });
  }

  onImageClick(event: number): void {
    this._lightbox.open(this.lightBoxImages, event);
  }

  onClose(): void {
    this._lightbox.close();
  }

}
