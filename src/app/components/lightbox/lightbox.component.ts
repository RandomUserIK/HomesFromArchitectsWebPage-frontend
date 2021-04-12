import {Component, Input, OnInit} from '@angular/core';
import {IAlbum, Lightbox, LightboxConfig} from 'ngx-lightbox';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  @Input() imagePaths: Array<string>;
  @Input() dataInterval: number;

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
