import {Component, Input, OnInit} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {FileService} from '../../../../../../admin-view/services/file-service';

@Component({
  selector: 'app-project-title-image',
  templateUrl: './project-title-image.component.html'
})
export class ProjectTitleImageComponent implements OnInit {

  @Input() titleImagePath: string;

  public isLoading = false;
  public titleImagePreview: SafeUrl;

  constructor(private _fileService: FileService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._fileService.getFileFromPathAsSafeUrl(this.titleImagePath).subscribe((imageSafeUrl) => {
      this.titleImagePreview = imageSafeUrl;
      this.isLoading = false;
    });
  }

}
