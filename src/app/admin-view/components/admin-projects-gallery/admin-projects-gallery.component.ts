import {Component} from '@angular/core';
import {AbstractProjectGalleryDirective} from '../../../models/abstract-project-gallery';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../../../services/projects-service';
import {SearchHeaderService} from '../../../components/search-header/services/search-header.service';

@Component({
  selector: 'app-admin-projects-gallery',
  templateUrl: './admin-projects-gallery.component.html',
  styleUrls: ['./admin-projects-gallery.scss']
})
export class AdminProjectsGalleryComponent extends AbstractProjectGalleryDirective {


  constructor(activatedRoute: ActivatedRoute,
              projectsService: ProjectsService,
              searchHeaderService: SearchHeaderService,
              private router: Router) {
    super(activatedRoute, projectsService, searchHeaderService);
  }

  onAddProject(): void {
    this.router.navigate(['admin/vytvor'], {queryParams: {categoryId: this.categoryId}});
  }
}
