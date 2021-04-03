import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {ProjectsService} from '../../../services/projects-service';
import {ProjectData} from '../../../admin-view/models/project-data';

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss']
})
export class ProjectsGalleryComponent implements OnInit {

  currentPage = 1;
  private projects: Array<ProjectData>;
  private totalElements: any;
  private loading: boolean;
  categoryTitles = {
    'individualne-projekty': 'Individuálne projekty',
    'katalogove-projekty': 'Katalógové projekty',
    'interierovy-dizajn': 'Interiérový dizajn',
  }
  categoryTitle: string;

  constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => {
        this.categoryTitle = this.categoryTitles[params.id]
        return this.projectsService.searchAll(params.id, this.currentPage - 1);
      })
    ).subscribe(this.processData())
  }

  private processData() {
    return (data) => {
      this.projects = data.individualProjects;
      this.currentPage = data.currentPage + 1;
      this.totalElements = data.totalElements;
      this.loading = false;
    }
  }
}
