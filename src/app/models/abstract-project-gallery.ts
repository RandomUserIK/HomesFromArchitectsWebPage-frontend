import {Directive, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {SearchHeaderService} from '../components/search-header/services/search-header.service';
import {ProjectsService} from '../services/projects-service';
import {Project} from './project/project.model';
import {AutoScrollService} from '../services/auto-scroll.service';
import {PageableProjectMessageResource} from './web/response-bodies/project/pageable-project-message-resource';

@Directive()
export abstract class AbstractProjectGalleryDirective implements OnInit, OnDestroy {

  public currentPage = 1;
  public pageSize = 10;
  public projects: Array<Project> = [];
  public totalElements: number;
  public categoryTitle: string;
  public loading: boolean;
  public projectCategory: string;
  private query: string;
  private searchHeaderState$: Subscription;

  constructor(protected autoScrollService: AutoScrollService,
              protected activatedRoute: ActivatedRoute,
              protected projectsService: ProjectsService,
              protected searchHeaderService: SearchHeaderService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        switchMap(data => {
          this.categoryTitle = data.projectsTitle;
          this.projectCategory = data.projectsCategoryId;
          this.autoScrollService.scrollToTop();
          return this.handleProjectsList(1, this.projectCategory, '');
        })
      ).subscribe(this.processData());

    this.searchHeaderState$ = this.searchHeaderService.searchHeaderState
      .pipe(
        switchMap((query) => {
          this.query = query;
          return this.handleProjectsList(1, this.projectCategory, this.query);
        })
      ).subscribe(this.processData());
  }

  ngOnDestroy(): void {
    this.searchHeaderState$.unsubscribe();
  }

  private handleProjectsList(currentPage: number, projectCategory: string, query: string): Observable<PageableProjectMessageResource> {
    this.loading = true;
    this.autoScrollService.scrollToTop();
    return this.projectsService.getAllOnPageAndCategoryAndQuery(currentPage - 1, projectCategory, query);
  }

  private processData() {
    return (data) => {
      this.projects = data.projects;
      this.currentPage = data.currentPage + 1;
      this.totalElements = data.totalElements;
      this.loading = false;
    };
  }

  onPageChange(): void {
    this.handleProjectsList(this.currentPage, this.projectCategory, this.query).subscribe(this.processData());
  }
}
