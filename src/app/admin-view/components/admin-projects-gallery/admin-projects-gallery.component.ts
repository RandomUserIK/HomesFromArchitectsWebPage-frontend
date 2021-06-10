import {Component, Injector} from '@angular/core';
import {AbstractProjectGalleryDirective} from '../../../models/abstract-project-gallery';
import {Router} from '@angular/router';
import {AdminGallery} from '../admin-gallery/admin-gallery';

@Component({
  selector: 'app-admin-projects-gallery',
  templateUrl: './admin-projects-gallery.component.html'
})
export class AdminProjectsGalleryComponent extends AbstractProjectGalleryDirective implements AdminGallery {

  public message: string;
  public projectRemoved: boolean;

  constructor(injector: Injector, private _router: Router) {
    super(injector);
  }

  public remove($event: number): void {
    if ($event === undefined) {
      this.message = 'Projekt sa nepodarilo odstrániť';
      this.projectRemoved = false;
    } else {
      this.projects = this.projects.filter(project => project.id !== $event);
      this.message = 'Projekt sa podarilo odstrániť';
      this.projectRemoved = true;
    }
  }

  public add(): void {
    this._router.navigate(['admin/vytvor'], {queryParams: {projectCategory: this.projectCategory}});
  }

}
