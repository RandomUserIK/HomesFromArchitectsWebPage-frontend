import {Component, Input, OnInit} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {FileService} from '../../../../../admin-view/services/file-service';
import {Project} from '../../../../../models/project/project.model';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {

  @Input() project: Project;

  public image: SafeUrl;
  public projects = new Array<SafeUrl>();
  public loading = false;

  constructor(private _fileService: FileService) {
  }

  ngOnInit() {
    this.loading = true;
    this._fileService.getFileFromPathAsSafeUrl(this.project.titleImage).subscribe(
      (imageSafeUrl) => {
        this.image = imageSafeUrl;
        this.loading = false;
      });
  }

}
