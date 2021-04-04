import {Component, OnInit} from '@angular/core';
import {ProjectsListService} from '../../services/projects-list-service';
import {ProjectData} from '../../models/project-data';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects: Array<ProjectData>;
  loading = false;
  pageSize = 9;
  totalElements = 0;
  currentPage = 1;
  keyword = ''

  constructor(private _projectsListService: ProjectsListService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((routeData) => {
        return this.handleProjectsList(routeData.id, this.currentPage - 1)
      })).subscribe(this.processData());
  }

  public handleProjectsList(projectType: string, currentPage: number): Observable<any> {
    this.loading = true;
    if (this.keyword === '') {
      return this.searchAll(projectType, currentPage);
    } else {
      return this.searchByKeyword(projectType, currentPage);
    }
  }

  public onPageChange(): void {
    this.handleProjectsList(this.route.snapshot.params.id, this.currentPage - 1)
      .subscribe(this.processData())
  }

  public onSearchKeyword(value: string) {
    this.keyword = value;
    this._projectsListService
      .searchByKeyword(this.route.snapshot.params.id, this.currentPage - 1, this.keyword)
      .subscribe(this.processData());
  }

  private searchAll(projectType: string, currentPage: number): Observable<any> {
    return this._projectsListService.searchAll(projectType, currentPage);
  }

  private searchByKeyword(projectType: string, currentPage: number): Observable<any> {
    return this._projectsListService.searchByKeyword(projectType, currentPage, this.keyword);
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
