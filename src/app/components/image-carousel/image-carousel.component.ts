import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ImageModel} from '../../models/project/image-model';
import {ImageService} from '../../services/image.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {

  @Input() imageModels: Array<ImageModel>;
  @Input() dataInterval: number;
  @Input() pauseOnFocus: boolean;
  @Input() pauseOnHover: boolean;
  @Input() customArrows: boolean;
  @ViewChild('modal', {static: false}) private modal: ElementRef;
  @ViewChild('carousel', {static: false}) private carousel: ElementRef;

  public isLoading = false;

  constructor(private _imageService: ImageService, private modalService: NgbModal) {
  }

  public onImageClick(): void {
    if (!this.modalService.hasOpenModals()) {
      this.modalService.open(this.modal, {size: 'xl'});
    }
  }

  public getImage(id: number): string {
    return this._imageService.getImageFullUrl(id.toString());
  }

}
