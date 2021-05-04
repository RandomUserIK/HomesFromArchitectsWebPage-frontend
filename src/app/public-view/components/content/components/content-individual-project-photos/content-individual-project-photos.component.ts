import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../../../../services/projects-service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FileService} from '../../../../../admin-view/services/file-service';
import {PageableProjectsData} from '../../../../../models/pageable-projects-data';
import {Project} from '../../../../../models/project/project.model';
import {exhaustMap} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';

@Component({
  selector: 'app-content-individual-project-photos',
  templateUrl: './content-individual-project-photos.component.html',
  styleUrls: ['./content-individual-project-photos.component.scss']
})
export class ContentIndividualProjectPhotosComponent implements OnInit {

  public photos = new Array<SafeUrl>();
  public loading = true;


  constructor(protected projectsService: ProjectsService, private fileService: FileService, private sanitizer: DomSanitizer) {
  }


  private createPhotoFileObservables(individualProjects: Project[]): Observable<Blob>[] {
    const photoFileObservables = [];
    individualProjects.forEach((value: Project) => {
      photoFileObservables.push(this.fileService.getFileFromPath(value.titleImage));
    });
    if (photoFileObservables.length === 0)
      this.loading = false;
    return photoFileObservables;
  }

  ngOnInit(): void {
    this.projectsService.getSpecifiedNumberOfProjects(0, 3)
      .pipe(
        exhaustMap(
          (project: PageableProjectsData) =>
            forkJoin(this.createPhotoFileObservables(project.projects))
        )).subscribe(value => {
      value.map(blobFile =>
        this.photos.push(this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(new Blob([blobFile], {type: 'application/octet-stream'})))
        ));
      this.loading = false;
    });
  }

}
