import {Directive, Injector, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {SearchHeaderService} from '../components/search-header/services/search-header.service';
import {AutoScrollService} from '../services/auto-scroll.service';
import {ProjectsService} from '../services/projects-service';
import {AbstractGallery} from './abstract-gallery';
import {Project} from './project/project.model';
import {PageableProjectMessageResource} from './web/response-bodies/project/pageable-project-message-resource';
import {ProjectsGalleryStateService} from '../public-view/components/projects-gallery/services/projects-gallery-state.service';

@Directive()
export abstract class AbstractProjectGalleryDirective extends AbstractGallery implements OnInit, OnDestroy {

  public stateService: ProjectsGalleryStateService;
  protected scrollService: AutoScrollService;
  protected activatedRoute: ActivatedRoute;
  protected projectsService: ProjectsService;
  protected searchHeaderService: SearchHeaderService;
  public projects: Array<Project> = [];
  public categoryTitle: string;
  public projectCategory: string;
  private query: string;
  private searchHeaderState$: Subscription;


  protected constructor(injector: Injector) {
    super();
    this.stateService = injector.get(ProjectsGalleryStateService);
    this.scrollService = injector.get(AutoScrollService);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.projectsService = injector.get(ProjectsService);
    this.searchHeaderService = injector.get(SearchHeaderService);
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        switchMap((data) => {
          this.categoryTitle = data.projectsTitle;
          this.projectCategory = data.projectCategory;
          return this.handleProjectsList(
            1,
            this.projectCategory,
            '');
        })
      ).subscribe(this.processData());

    this.searchHeaderState$ = this.searchHeaderService.searchHeaderState
      .pipe(
        switchMap((query) => {
          this.query = query;
          return this.handleProjectsList(this.stateService.currentPage, this.projectCategory, this.query);
        })
      ).subscribe(this.processData());
  }

  ngOnDestroy(): void {
    this.searchHeaderState$.unsubscribe();
  }

  public onPageChange(): void {
    this.handleProjectsList(this.stateService.currentPage, this.projectCategory, this.query).subscribe(this.processData());
  }

  private handleProjectsList(currentPage: number, projectCategory: string, query: string): Observable<PageableProjectMessageResource> {
    this.isLoading = true;
    this.scrollService.scrollToTop();
    return this.projectsService.getAllOnPageAndCategoryAndQuery(currentPage - 1, projectCategory, query);
  }

  private processData(): (data: any) => void {
    return (data) => {
      this.projects = data.projects;
      this.totalElements = data.totalElements;
      this.isLoading = false;
    };
  }

}
