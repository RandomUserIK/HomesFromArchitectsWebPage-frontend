import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../../../../services/projects-service';
import {SafeUrl} from '@angular/platform-browser';
import {FileService} from '../../../../../admin-view/services/file-service';
import {Project} from '../../../../../models/project/project.model';
import {exhaustMap} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {PageableProjectMessageResource} from '../../../../../models/web/response-bodies/project/pageable-project-message-resource';

@Component({
  selector: 'app-content-individual-project-photos',
  templateUrl: './content-individual-project-photos.component.html'
})
export class ContentIndividualProjectPhotosComponent implements OnInit {

  public photos = new Array<SafeUrl>();
  public loading = true;

  constructor(protected projectsService: ProjectsService, private fileService: FileService) {
  }

  private createPhotoFileObservables(individualProjects: Project[]): Observable<SafeUrl>[] {
    const photoFileObservables = [];
    individualProjects.forEach((value: Project) => {
      // todo
      // photoFileObservables.push(this.fileService.getFileFromPathAsSafeUrl(value.titleImagePath)); todo fix
    });
    if (photoFileObservables.length === 0)
      this.loading = false;
    return photoFileObservables;
  }

  ngOnInit(): void {
    this.projectsService.getSpecifiedNumberOfProjects(0, 'INDIVIDUAL', 3)
      .pipe(
        exhaustMap(
          (project: PageableProjectMessageResource) =>
            forkJoin(this.createPhotoFileObservables(project.projects))
        )).subscribe(value => {
      value.map(safeUrl =>
        this.photos.push(safeUrl));
      this.loading = false;
    });
  }

}
