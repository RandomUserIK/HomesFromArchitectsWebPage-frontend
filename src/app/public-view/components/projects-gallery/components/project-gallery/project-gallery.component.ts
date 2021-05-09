import {Component, Input, OnInit} from '@angular/core';
import {FileService} from '../../../../../admin-view/services/file-service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
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

  constructor(private fileService: FileService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.loading = true;
    this.fileService.getFileFromPath(this.project.titleImage).subscribe(
      (photo) => {
        this.image = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(new Blob([photo], {type: 'application/octet-stream'}))
        );
        this.loading = false;
      });
  }

}
