import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FileService} from '../../../../../admin-view/services/file-service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Project} from '../../../../../models/project/project.model';
import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {

  @Input() project: Project;

  public image: SafeUrl;
  public loading = false;

  constructor(private _fileService: FileService,
              private _sanitizer: DomSanitizer,
              private _router: Router) {
    registerLocaleData(localeSk, 'sk');
  }

  ngOnInit(): void {
    this.loading = true;
    this._fileService.getFileFromPath(this.project.titleImage).subscribe(
      (photo) => {
        this.image = this._sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(new Blob([photo], {type: 'application/octet-stream'}))
        );
        this.loading = false;
      });
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
