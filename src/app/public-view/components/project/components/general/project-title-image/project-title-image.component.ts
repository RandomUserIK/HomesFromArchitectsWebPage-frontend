import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../../../../../services/image.service';
import {ImageModel} from '../../../../../../models/project/image-model';

@Component({
  selector: 'app-project-title-image',
  templateUrl: './project-title-image.component.html'
})
export class ProjectTitleImageComponent implements OnInit {

  @Input() titleImage: ImageModel;

  public isLoading = false;
  public titleImagePathFullPath: string;

  constructor(private _imageService: ImageService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.titleImagePathFullPath = this._imageService.getImageFullUrl(this.titleImage.id.toString());
    this.isLoading = false;
  }

}
