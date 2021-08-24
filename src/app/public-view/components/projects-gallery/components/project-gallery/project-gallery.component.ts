import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {Component, Input, OnInit} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
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
  public isLoading = false;

  constructor(private _fileService: FileService,
              private _router: Router) {
    registerLocaleData(localeSk, 'sk');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._fileService.getFileFromPathAsSafeUrl(this.project.titleImage).subscribe(
      (imageAsSafeUrl) => {
        this.image = imageAsSafeUrl;
        this.isLoading = false;
      }
    );
  }

  public onProjectClick(): void {
    let navigateTo = '';
    switch (this.project.category) {
      case 'INDIVIDUAL':
        navigateTo = 'individualne-projekty';
        break;
      case 'INTERIOR_DESIGN':
        navigateTo = 'interierovy-dizajn';
        break;
      case 'COMMON':
        navigateTo = 'katalogove-projekty';
        break;
    }

    if (navigateTo) {
      this._router.navigate([`${navigateTo}/${this.project.id}`]);
    }
  }
}
