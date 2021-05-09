import {Component} from '@angular/core';
import {AbstractProjectGalleryDirective} from '../../../models/abstract-project-gallery';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../../../services/projects-service';
import {SearchHeaderService} from '../../../components/search-header/services/search-header.service';
import {AutoScrollService} from '../../../services/auto-scroll.service';

@Component({
  selector: 'app-admin-projects-gallery',
  templateUrl: './admin-projects-gallery.component.html',
  styleUrls: ['./admin-projects-gallery.scss']
})
export class AdminProjectsGalleryComponent extends AbstractProjectGalleryDirective {

  public message: string;
  public projectRemoved: boolean;

  constructor(autoScrollService: AutoScrollService,
              activatedRoute: ActivatedRoute,
              projectsService: ProjectsService,
              searchHeaderService: SearchHeaderService,
              private router: Router) {
    super(autoScrollService, activatedRoute, projectsService, searchHeaderService);
  }

  removeProject($event: number) {
    if ($event === undefined) {
      this.message = 'Projekt sa nepodarilo odstrániť';
      this.projectRemoved = false;
    } else {
      this.projects = this.projects.filter(project => project.id !== $event);
      this.message = 'Projekt sa podarilo odstrániť';
      this.projectRemoved = true;
    }
  }

  onAddProject(): void {
    this.router.navigate(['admin/vytvor'], {queryParams: {projectType: this.categoryId}});
  }
}
