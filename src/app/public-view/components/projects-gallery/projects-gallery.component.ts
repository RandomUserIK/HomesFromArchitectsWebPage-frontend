import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {ProjectsService} from '../../../services/projects-service';
import {ProjectData} from '../../../models/project-data';
import {SearchHeaderService} from './components/search-header/services/search-header.service';
import {Observable, Subscription} from 'rxjs';
import {PageableProjectsData} from '../../../models/pageable-projects-data';
import {loadingAnimation} from './animations/loading.animation';

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss'],
  animations: loadingAnimation
})
export class ProjectsGalleryComponent implements OnInit, OnDestroy {

  currentPage = 1;
  pageSize = 9;
  projects: Array<ProjectData> = [];
  totalElements: number;
  categoryTitle: string;
  loading: boolean;
  private query: string;
  private categoryId: string;
  private searchHeaderState$: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private projectsService: ProjectsService,
              private searchHeaderService: SearchHeaderService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      switchMap(data => {
        this.loading = true;
        this.categoryTitle = data.projectsTitle;
        this.categoryId = data.projectsCategoryId;
        return this.projectsService.getAllOnPageAndCategory(this.currentPage - 1, this.categoryId);
      })
    ).subscribe(this.processData());

    this.searchHeaderState$ = this.searchHeaderService.searchHeaderState
      .pipe(switchMap((query) => {
        this.query = query;
        return this.handleProjectsList(1, this.categoryId, this.query);
      })).subscribe(this.processData());
  }

  ngOnDestroy(): void {
    this.searchHeaderState$.unsubscribe();
  }

  private handleProjectsList(currentPage: number, categoryId: string, query: string): Observable<PageableProjectsData> {
    this.loading = true;
    return this.projectsService.getAllOnPageAndCategoryAndQuery(currentPage - 1, categoryId, query);
  }

  private processData() {
    return (data) => {
      this.projects = data.projects;
      this.currentPage = data.currentPage + 1;
      this.totalElements = data.totalElements;
      this.loading = false;
    }
  }

  onPageChange(): void {
    this.handleProjectsList(this.currentPage, this.categoryId, this.query).subscribe(this.processData());
  }
}
