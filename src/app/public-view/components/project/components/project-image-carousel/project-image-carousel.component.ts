import {Component, Input, OnInit} from '@angular/core';
import {IAlbum, Lightbox, LightboxConfig} from 'ngx-lightbox';

@Component({
  selector: 'app-project-image-carousel',
  templateUrl: './project-image-carousel.component.html',
  styleUrls: ['./project-image-carousel.component.scss']
})
export class ProjectImageCarouselComponent implements OnInit {

  @Input() projectPhotoPaths: Array<string>;
  private album: Array<IAlbum> = [];

  constructor(private _lightbox: Lightbox,
              private _lightboxConfig: LightboxConfig) {
  }

  ngOnInit(): void {
    this._lightboxConfig.enableTransition = false;
    this._lightboxConfig.positionFromTop = 150;
    this.projectPhotoPaths.forEach((photoPath) => {
      this.album.push({
        src: 'assets/' + photoPath,
        caption: '',
        thumb: ''
      });
    });
  }

  onClick(index: number): void {
    this._lightbox.open(this.album, index);
  }

  onClose(): void {
    this._lightbox.close();
  }

}
