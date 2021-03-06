import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Project} from '../../../../../models/project/project.model';
import {ProjectsService} from '../../../../../services/projects-service';
import {Router} from '@angular/router';
import {AdminGalleryElement} from '../../../admin-gallery/admin-gallery';

@Component({
  selector: 'app-admin-project-gallery',
  templateUrl: './admin-project-gallery.component.html',
  styleUrls: ['./admin-project-gallery.component.scss']
})
export class AdminProjectGalleryComponent implements AdminGalleryElement {

  @Input() project: Project;
  @Input() projectCategory: string;
  @Output() projectRemoval: EventEmitter<number> = new EventEmitter();

  constructor(private _projectService: ProjectsService,
              private _router: Router) {
  }

  public edit(): void {
    this._router.navigate(['admin/vytvor'],
      {
        state: {projectData: this.project},
        queryParams: {projectCategory: this.projectCategory}
      });
  }

  public remove(): void {
    if (confirm(`Ste si istý, že chcete vymazať projekt ${this.project.title}?`)) {
      this._projectService.removeProject(this.project.id).subscribe(
        () => {
          this.projectRemoval.emit(this.project.id);
        },
        () => {
          this.projectRemoval.emit(undefined);
        });
    }
  }
}
